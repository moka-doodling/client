import InputField from "../../components/InputField";
import Text from "../../components/Text";
import Button from "../../components/Button";
import logo from "../../assets/images/logo.svg";
import {
  Container,
  LogoWrapper,
  Image,
  InputFieldGroup,
  ButtonGroup,
  Title,
  Box
} from "./styled";

const Login = () => {
  return (
    <Container>
      <Image src={logo}></Image>
      <Box>
        <Title>
            <Text theme={"loginTitle"}>로그인</Text>
        </Title>
        <InputFieldGroup>
          <InputField placeholder={"닉네임"} theme={"loginForm"}></InputField>
          <InputField placeholder={"비밀번호"} theme={"loginForm"}></InputField>
        </InputFieldGroup>
        <ButtonGroup>
          <Button theme={"loginBtn"}>시작하기</Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default Login;
