import styled from 'styled-components';

// styled-components 부분 수정

export const Container = styled.div`
  width: 15vw; 
  height: 60vh;
  position: fixed;
  z-index: 10;
  border: 3px solid black; 
  top: 2vh;
  left: 2vw;
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: white;
  border-radius: 7px;
`;

export const ButtonGroup = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column; 
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: left; 
  gap: 3vh;
  padding-top: 1vh;
  margin-bottom: 2vh;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%; 
  flex-direction: column; 
  height: 5vh;
  margin-top: 5vh;
  gap: 1vh;
`;

export const CustomBtn = styled.button`
  border-radius: 7px;
  border: 2px solid black;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7vw;
  height: 5vh;
  background-color: white;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: black; /* 선의 색상 */
  margin-top: 5vh; 
  margin-bottom: 3vh; 
`;

export const Image = styled.img`
  width: 6vw;
  height: auto;
`;
