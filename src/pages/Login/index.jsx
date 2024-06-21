import InputField from '../../components/InputField';
import Text from '../../components/Text';
import Button from '../../components/Button';
import logo from '../../assets/images/logo.svg';
import {
  Container,
  LogoWrapper,
  Image,
  InputFieldGroup,
  ButtonGroup,
  Title,
  Box,
  ErrorStateContainer,
  ButtonContainer,
} from './styled';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../apis';
import { jwtDecode } from 'jwt-decode';
import { loginInfo, loginState } from '../../store/atoms';
import { useRecoilState } from 'recoil';
import { Header } from '../../components';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [loginUserInfo, setLoginUserInfo] = useRecoilState(loginInfo);
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);

  const [errorState, setErrorState] = useState(null);

  const onLoginSuccess = (accessToken, refreshToken) => {
    const expiredTime = jwtDecode(accessToken).exp;

    const nowInSeconds = Math.floor(Date.now() / 1000);
    const remainingTime = expiredTime - nowInSeconds;

    document.cookie = `auth=${accessToken}; path=/; SameSite=Strict; HttpOnly;`;
    document.cookie = `refresh=${refreshToken}; path=/; SameSite=Strict; HttpOnly;`;

    console.log('remainingTime: ', remainingTime);
    axiosInstance.defaults.headers.common['Authorization'] = `${accessToken}`;
    axiosInstance.defaults.headers.common['Refresh'] = `${refreshToken}`;

    setTimeout(() => {
      console.log('토큰 생성', refreshToken);
      onSilentRefresh(refreshToken);
    }, remainingTime * 1000);
  };

  const onSilentRefresh = (refreshToken) => {
    console.log('onSilentRefresh: ', refreshToken);
    delete axiosInstance.defaults.headers.common['Authorization'];
    delete axiosInstance.defaults.headers.common['Refresh'];
    axiosInstance
      .post('/member/refresh', {
        username: username,
        refreshToken: refreshToken,
      })
      .then((response) => {
        console.log(response.data);
        // 가져온 refresh token 가져왔을 때 할 추가적인 처리

        onLoginSuccess(response.data.accessToken, response.data.refreshToken);
      })
      .catch((error) => {
        // refresh token 만료됐을 때 홈화면 이동과 같은 처리 필요
        console.error('Error saving data:', error);
      });
  };

  const handleLogin = () => {
    if (!username || !password) {
      setErrorState('닉네임과 비밀번호를 모두 입력해주세요.');
      return;
    }

    setErrorState(null);

    axiosInstance
      .post('/member/login', {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        const authToken = response.headers['auth'];
        const refreshToken = response.headers['refresh'];

        onLoginSuccess(authToken, refreshToken);
        setLoginUserInfo({
          username: username,
          memberId: response.data,
          role: jwtDecode(authToken).auth,
        });
        setLoginUserState({
          isLogin: true,
        });
        console.log(loginUserInfo);
        if (jwtDecode(authToken).auth.includes('ROLE_ADMIN')) {
          navigate('/admin/noticelist');
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        setErrorState('아이디 또는 비밀번호가 일치하지 않습니다.');
        console.error('Error saving data:', error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        {/* <Image src={logo}></Image> */}
        <Box>
          <Title>
            <Text theme={'loginTitle'}>로그인</Text>
          </Title>
          <InputFieldGroup>
            <InputField
              placeholder={'닉네임'}
              theme={'loginForm'}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type={'text'}
            ></InputField>
            <InputField
              placeholder={'비밀번호'}
              theme={'loginForm'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={'password'}
            ></InputField>
          </InputFieldGroup>
          <ButtonGroup>
            <ButtonContainer>
              <Button theme={'loginBtn'} onClick={handleLogin}>
                시작하기
              </Button>
            </ButtonContainer>
            <ErrorStateContainer>
              <Text theme={'text9'}>{errorState}</Text>
            </ErrorStateContainer>
          </ButtonGroup>
        </Box>
      </Container>
    </>
  );
};

export default Login;
