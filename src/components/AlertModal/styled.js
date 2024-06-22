import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const Container = styled.div`
  border-radius: 5px;
  border: 2px solid #323232;
  background: #fff;
  box-shadow: 4px 4px 0px 0px #323232;
  width: 30vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.4vw;
  width: 80%;
  height: 50%;
  white-space: pre-wrap;
`;

export const CloseButton = styled.button`
  background: #fcf390;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  transition: background-color 0.3s ease;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
`;
