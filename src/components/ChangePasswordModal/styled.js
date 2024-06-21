import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 3vh 3vw;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

export const ModalTitleContainer = styled.div`
  width: 100%;
  margin: 3vh 2vw;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 4vh 0;
  justify-content: center;
  flex-direction: column;
  gap: 2vh;
  //   border: 10px solid red;
`;

export const TextContainer = styled.div`
  width: 18vw;
  margin: 0 0 0 2vw;
  height: 100%;
`;

export const InputFieldContainer = styled.div`
  width: 30vw;
`;

export const InputFieldGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: center;
  gap: 2vw;
  margin-bottom: 10px;
  // border: 10px solid black;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1vw;
`;

export const ErrorStateContainer = styled.div`
  width: 80%;
  justify-content: left;
`;
