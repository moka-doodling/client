import React, { useState } from 'react';
import { Container, ModalContainer, TextWrapper, CloseButton } from './styled';

const AlertModal = ({ alertText, handleModalClose }) => {
  return (
    <>
      <ModalContainer />
      <Container>
        <TextWrapper>{alertText}</TextWrapper>
        <CloseButton onClick={handleModalClose}>닫기</CloseButton>
      </Container>
    </>
  );
};

export default AlertModal;
