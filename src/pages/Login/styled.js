import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 72vh;
  margin-top: 22vh;
  padding-top: 6vh;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fef380;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8vh;
  left: 50%;
  transform: translateX(-50%);
`;

export const InputFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20vh;
  gap: 22px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  width: 100%;
`;
