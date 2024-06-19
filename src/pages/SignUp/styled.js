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
  width: 30vw;
  min-height: 70vh;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);
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
