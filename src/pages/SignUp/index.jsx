import InputField from '../../components/InputField';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {
  Container,
  InputFieldGroup,
  ButtonGroup,
  Title,
  Box,
  ButtonContainer,
  ErrorStateContainer,
} from './styled';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../apis';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../../components';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const [usernameErrorState, setUsernameErrorState] = useState(null);
  const [passwordErrorState, setPasswordErrorState] = useState(null);
  const [passwordValidErrorState, setPasswordValidErrorState] = useState(null);

  // 쌍따옴표 대신 이런 식으로 작성 필요
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  const navigate = useNavigate();

  useEffect(() => {
    setUsernameErrorState(null);
    setPasswordErrorState(null);
    setPasswordValidErrorState(null);
  }, []);

  const handleUsernameChange = (username) => {
    setUsername(username);
    if (username.length < 2 || 8 < username.length) {
      setUsernameErrorState('아이디 길이는 2~8글자여야 합니다.');
      return;
    }
    setUsernameErrorState(null);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    if (!passwordReg.test(password)) {
      setPasswordErrorState('비밀번호는 영문, 숫자 포함 8자리 이상이어야 합니다.');
      return;
    }
    setPasswordErrorState(null);
  };

  const handlePasswordValidChange = (passwordValidation) => {
    setPasswordValidation(passwordValidation);
    // 비밀번호와 확인 비밀번호 일치 여부 확인
    if (password != passwordValidation) {
      setPasswordValidErrorState('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
      return;
    }
    setPasswordValidErrorState(null);
  };

  const handleSignUp = () => {
    console.log(username, password, passwordValidation);

    axiosInstance
      .post('/member/sign-up', {
        username: username,
        password: password,
        passwordValidation: passwordValidation,
      })
      .then((response) => {
        navigate('/login');
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          setPasswordValidErrorState('이미 존재하는 유저 아이디입니다.');
        } else {
          setPasswordValidErrorState('로그인 중 오류가 발생했습니다.');
        }
      });
  };
  return (
    <>
      <Header />
      <Container>
        <Box>
          <Title>
            <Text theme={'loginTitle'}>회원가입</Text>
          </Title>
          <InputFieldGroup>
            <InputField
              placeholder={'닉네임'}
              theme={'loginForm'}
              value={username}
              onChange={(e) => handleUsernameChange(e.target.value)}
              type={'text'}
            ></InputField>
            <ErrorStateContainer>
              <Text theme={'text9'}>{usernameErrorState}</Text>
            </ErrorStateContainer>
            <InputField
              placeholder={'비밀번호'}
              theme={'loginForm'}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              type={'password'}
            ></InputField>
            <ErrorStateContainer>
              <Text theme={'text9'}>{passwordErrorState}</Text>
            </ErrorStateContainer>
            <InputField
              placeholder={'비밀번호 확인'}
              theme={'loginForm'}
              value={passwordValidation}
              onChange={(e) => handlePasswordValidChange(e.target.value)}
              type={'password'}
            ></InputField>
            <ErrorStateContainer>
              <Text theme={'text9'}>{passwordValidErrorState}</Text>
            </ErrorStateContainer>
          </InputFieldGroup>
          <ButtonGroup>
            <ButtonContainer>
              <Button theme={'loginBtn'} onClick={handleSignUp}>
                시작하기
              </Button>
            </ButtonContainer>
          </ButtonGroup>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
