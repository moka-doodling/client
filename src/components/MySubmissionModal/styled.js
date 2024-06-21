import styled from 'styled-components';
import bookContentImage from '../../assets/images/bookcontent.svg';

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
  width: 35vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const ImgWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 35%;
  border-radius: 16px;
  border: 3px solid #323232;
  box-shadow: 4px 4px 0px 0px #000;
`;

export const Image = styled.img`
  width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Crayon', sans-serif;
  border-top: 4px solid #000;
  background: #fff;
  font-weight: 300;
  text-align: center;
  white-space: pre-line;
  font-size: 1.4vw;
  padding-top: 1vh;
  width: 80%;
  height: 35%;
  background-image: url(${bookContentImage});
  background-size: contain
  background-repeat: no-repeat;
  background-position: center;
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
