import styled, { css } from 'styled-components';

export const WhiteBox = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const HeaderContainer = styled.div`
  width: 80vw;
  height: 15vh;
  position: fixed;
  z-index: 10;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  top: 5vh;
  left: 0;
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  margin: 0 10vw;
  background-color: white;
`;

export const Container = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  gap: 40px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 20vw; 
`;

export const StyledRectangle = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 30px;
  overflow-x: auto;
`;

export const ButtonGroup = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10vw;.
`;

const commonStyles = css`
  border-radius: 5px;
  border: 3px solid black;
  transition: background-color 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleRectangle = styled.div`
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  background-color: white;
  width: 20vw;
  flex-direction: column;
  position: relative;
  top: -5vh;
  margin-right: 8vw;
  margin-top: 3vh;
`;

export const ContestImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  background-color: white;
`;

export const ContestCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-left: 2vw;
  margin-right: 2vw;
  width: 18vw;
  height: 40vh;
  margin-top: 3vh;
  margin-bottom: 3vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ${({ selected }) => selected && `
    background-color: #fcf390; 
  `}
`;

export const ContestDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const ContestTitle = styled.h3`
  margin: 10px 0;
`;

export const WeekWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1vw;
`;

export const WeekBtn = styled.button`
  height: 6vh;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  transition: background-color 0.3s ease;
  background: ${({ selected }) => (selected ? '#fcf390' : 'white')};
  &:active,
  &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
  width: 5vw;
`;

export const Separator = styled.div`
  width: 70%;
  height: 3px;
  background-color: black; /* 선의 색상 */
  margin-top: 2vh;
`;
