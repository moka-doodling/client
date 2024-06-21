import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 20vh;
  height: 20vh;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Box = styled.div`
  width: 25vw;
  min-height: 60vh;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 28vh;
  left: 50%;
  transform: translateX(-50%);
  background: #fef380;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6vh;
  left: 50%;
  transform: translateX(-50%);
`;

export const InputFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 16vh;
  gap: 22px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ErrorStateContainer = styled.div`
  width: 100%;
  margin: 3vh 0;
  justify-content: center;
  align-items: center;
`;
