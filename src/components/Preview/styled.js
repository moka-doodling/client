import styled from 'styled-components';
import { Button } from  '../index';
import { StyledButton } from '../Button/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  position: relative;
`;

export const StyledRectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 20vw;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  transition: background-color 0.3s ease;
  background-color: white;
`;

export const ClickImg = styled.img`
  height: 90%;
  position: absolute;
  z-index: 1;
  right: 40px;
  bottom: -15px;
`;

export const ButtonArea = styled.div`
  position: absolute; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 10vh;
  width: 20vw;
  bottom: 20px;
`;

export const CustomButton = styled(StyledButton)`
  position: absolute;
  z-index: 0;
  bottom: 10px;
`;


export const CoverImg = styled.img`
  height: 45%;
  position: absolute;
  top: 60px;
`;

export const TitleRectangle = styled.div`
  height: 6vh;
  width: 10vw;
  border-radius: 5px;
  border: 3px solid black;
  transition: background-color 0.3s ease;
  background-color: #8ED8AC;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -20px;
`;