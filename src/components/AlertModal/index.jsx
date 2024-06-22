import React, { useState } from 'react';
import {
  Container,
  ModalContainer,
  TextWrapper,
  CloseButton,
  ButtonWrapper,
} from './styled';

const AlertModal = ({ alertText, handleModalClose, handleConfirm, type }) => {
  return (
    <>
      <ModalContainer />
      <Container>
        <TextWrapper>{alertText}</TextWrapper>
        {type === 'confirm' ? (
          <ButtonWrapper>
            <CloseButton onClick={handleConfirm}>확인</CloseButton>
            <CloseButton onClick={handleModalClose}>취소</CloseButton>
          </ButtonWrapper>
        ) : (
          <CloseButton onClick={handleModalClose}>닫기</CloseButton>
        )}
      </Container>
    </>
  );
};

export default AlertModal;
