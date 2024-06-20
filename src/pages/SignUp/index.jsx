import InputField from '../../components/InputField';
import Text from '../../components/Text';
import Button from '../../components/Button';
import logo from '../../assets/images/logo.svg';
import {
  Container,
  Image,
  InputFieldGroup,
  ButtonGroup,
  Title,
  Box,
  ErrorMessage,
} from './styled';
import { useState } from 'react';
import { axiosInstance } from '../../apis';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  // 쌍따옴표 대신 이런 식으로 작성 필요
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log(username, password, passwordValidation);
    // 간단한 입력 유효성 검사 예시
    if (!username || !password || !passwordValidation) {
      alert('닉네임과 비밀번호를 모두 입력해주세요.');
      return;
    }

    if (username.length < 2 || 8 < username.length) {
      alert("아이디 길이는 2~8글자여야 합니다.");
      return;
    }

    if (!passwordReg.test(password)) {
      alert('비밀번호는 영문, 숫자 포함 8자리 이상이어야 합니다.');
      return;
    }

    // 비밀번호와 확인 비밀번호 일치 여부 확인
    if (password !== passwordValidation) {
      alert('비밀번호와 확인 비밀번호가 일치하지 않습니다.');
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
        <Image src={logo}></Image>
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
            <Button theme={'loginBtn'} onClick={handleSignUp}>
              가입하기
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
