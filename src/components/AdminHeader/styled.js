import styled from 'styled-components';

// styled-components 부분 수정

export const Container = styled.div`
  width: 20vw; 
  height: 50vh;
  position: fixed;
  z-index: 10;
  border-right: 3px solid black; 
  border-bottom: 3px solid black;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center;
  background-color: white;
`;

export const ButtonGroup = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
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
  margin-top: 1vh;
  margin-bottom: 2vh; 
`;

export const CustomBtn = styled.button`
  border-radius: 7px;
  border: 2px solid black;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* 변경: 전체 너비에 맞춤 */
  height: 5vh;
  background-color: white;
`;

export const Separator = styled.div`
  width: 100%;
  height: 3px;
  background-color: black; /* 선의 색상 */
  margin-top: 1vh; /* 선 아래 여백 추가 */
`;
