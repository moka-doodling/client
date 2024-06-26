import styled from 'styled-components';
import imgsrc from '../../assets/images/input.svg';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 22vh;
  padding-top: 6vh;
`;

export const Wrapper = styled.div`
  width: 80vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3vh;
`;

export const StyledTextArea = styled.textarea`
  margin: 3vh 0;
  width: 20vw;
  height: 12vw;
  background-image: url(${imgsrc});
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  font-size: 1rem;
  resize: none;
  outline: none;
  padding: 5vw;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  height: 45vh;
  margin-right: 1vw;
  display: flex;
  align-items: flex-end;
`;
