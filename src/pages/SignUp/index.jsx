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
import { useState } from 'react';
import { axiosInstance } from '../../apis';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../../components';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const [errorState, setErrorState] = useState(null);

  // 쌍따옴표 대신 이런 식으로 작성 필요
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log(username, password, passwordValidation);
    // 간단한 입력 유효성 검사 예시
    if (!username || !password || !passwordValidation) {
      setErrorState('닉네임과 비밀번호를 모두 입력해주세요.');
      return;
    }

    if (username.length < 2 || 8 < username.length) {
      setErrorState('아이디 길이는 2~8글자여야 합니다.');
      return;
    }

    if (!passwordReg.test(password)) {
      setErrorState('비밀번호는 영문, 숫자 포함 8자리 이상이어야 합니다.');
      return;
    }

    // 비밀번호와 확인 비밀번호 일치 여부 확인
    if (password !== passwordValidation) {
      setErrorState('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
      return;
    }

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
          alert('이미 존재하는 유저 아이디입니다.');
        } else {
          alert('로그인 중 오류가 발생했습니다.');
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
            <InputField
              placeholder={'비밀번호 확인'}
              theme={'loginForm'}
              value={passwordValidation}
              onChange={(e) => setPasswordValidation(e.target.value)}
              type={'password'}
            ></InputField>
          </InputFieldGroup>
          <ButtonGroup>
            <ButtonContainer>
              <Button theme={'loginBtn'} onClick={handleSignUp}>
                시작하기
              </Button>
            </ButtonContainer>
            <ErrorStateContainer>
              <Text theme={'text9'}>{errorState}</Text>
            </ErrorStateContainer>
          </ButtonGroup>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
