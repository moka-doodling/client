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
} from './styled';
import { useState } from 'react';
import { axiosInstance } from '../../apis';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSignUp = () => {
    console.log(username, password, passwordValidation);
    // 간단한 입력 유효성 검사 예시
    if (!username || !password || !passwordValidation) {
      alert('닉네임과 비밀번호를 모두 입력해주세요.');
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
        navigate("/login");
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };
  return (
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
  );
};

export default SignUp;
