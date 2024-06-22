import React, { useEffect, useState } from 'react';
import {
  InputFieldContainer,
  InputFieldGroup,
  ModalBackdrop,
  ModalContent,
  TextContainer,
  ModalTitleContainer,
  FormContainer,
  ButtonGroup,
  ErrorStateContainer,
} from './styled';
import InputField from '../InputField';
import Text from '../Text';
import Button from '../Button';
import { axiosInstance } from '../../apis';
import { useRecoilState } from 'recoil';
import { loginInfo } from '../../store/atoms';

const ChangePasswordModal = ({ handleModalClose }) => {
  const [loginUserInfo, setLoginUserInfo] = useRecoilState(loginInfo);
  const [oldPw, setOldPw] = useState(null);
  const [newPw, setNewPw] = useState(null);
  const [newPwValid, setNewPwValid] = useState(null);
  const [errorState, setErrorState] = useState(null);

  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  useEffect(() => {
    console.log('event at oldPw: ', oldPw);
  }, [oldPw]);

  const changePassword = async () => {
    console.log('비밀번호 변경 요청', oldPw, newPw, newPwValid);

    if (!passwordReg.test(newPw) || !passwordReg.test(newPwValid)) {
      setErrorState('비밀번호는 영문, 숫자 포함 8자리 이상이어야 합니다.');
      return;
    }

    setErrorState(null);
    await axiosInstance
      .patch(`/member/password/${loginUserInfo['memberId']}`, {
        oldPassword: oldPw,
        newPassword: newPw,
        passwordValidation: newPwValid,
      })
      .then((response) => {
        console.log(response);
        handleModalClose();
      })
      .catch((error) => {
        console.error(error);
        if (error.response && error.response.status === 401) {
          setErrorState(error.response.data.msg);
        }
      });
  };

  return (
    <ModalBackdrop>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitleContainer>
          <Text theme={'text7'}>비밀번호 변경</Text>
        </ModalTitleContainer>
        <FormContainer>
          <InputFieldGroup>
            <TextContainer>
              <Text theme={'text6'}>이전 비밀번호</Text>
            </TextContainer>
            <InputField
              placeholder={'비밀번호를 입력해주세요.'}
              theme={'changePasswordForm'}
              type={'password'}
              onChange={(e) => setOldPw(e.target.value)}
            ></InputField>
          </InputFieldGroup>

          <InputFieldGroup>
            <TextContainer>
              <Text theme={'text6'}>새 비밀번호</Text>
            </TextContainer>
            <InputField
              placeholder={'비밀번호를 입력해주세요.'}
              theme={'changePasswordForm'}
              type={'password'}
              onChange={(e) => setNewPw(e.target.value)}
            ></InputField>
          </InputFieldGroup>

          <InputFieldGroup>
            <TextContainer>
              <Text theme={'text6'}>비밀번호 확인</Text>
            </TextContainer>
            <InputField
              placeholder={'비밀번호를 입력해주세요.'}
              theme={'changePasswordForm'}
              type={'password'}
              onChange={(e) => setNewPwValid(e.target.value)}
            ></InputField>
          </InputFieldGroup>
        </FormContainer>
        <ButtonGroup>
          <ErrorStateContainer>
            <Text theme={'text8'}>{errorState}</Text>
          </ErrorStateContainer>
          <Button theme={'yellowChangePwBtn'} onClick={changePassword}>
            완료
          </Button>
          <Button theme={'whiteChangePwBtn'} onClick={handleModalClose}>
            취소
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ChangePasswordModal;
