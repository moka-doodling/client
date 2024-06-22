import styled from 'styled-components';
import Button from '../Button';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 49;
`;

export const ModalContent = styled.div`
  border-radius: 10px;
  border: 2px solid #323232;
  background: #fff;
  box-shadow: 4px 4px 0px 0px #323232;
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  padding: 20px;
  text-align: center;
`;

export const ModalHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: black;
`;

export const ModalBody = styled.div`
  height: 50vh;
  width: 35vw;
  font-size: 16px;
  color: #666;
  text-align: left;
  p {
    margin: 10px 0;
  }
  border: 3px solid black;
  border-radius: 10px;
  padding: 20px;

  overflow-y: auto;
  margin: 0 auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  &::-webkit-scrollbar {
    width: 2vw;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fcf390;
    border: 3px solid black;
    border-radius: 10px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
  bottom: 5vh;
`;

export const StyledButton = styled(Button)`
  flex: 1;
  margin: 0 10px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

export const ImageWrapper = styled.div`
  width: 30vw;
  height: 35vh;
  border-radius: 10px;
  border: 2px solid #323232;
`;
