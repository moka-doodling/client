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
  margin-top: 30vh;
  margin-bottom: 5vh;
  margin-left: auto; /* 화면 가운데 정렬을 위해 추가 */
  margin-right: auto; /* 화면 가운데 정렬을 위해 추가 */
`;

export const StyledRectangle = styled.div`
  width: 80vw;
  height: 50vh;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 30px;
  position: relative;
  overflow-x: auto;
  justify-content: center;
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

const rectangleStyles = {
  title: css`
    ${commonStyles}
    height: 6vh;
    background-color: #BACDE6;
    width: 15vw;
  `,
  subTitle: css`
    ${commonStyles}
    height: 6vh;
    background-color: #8ED8AC;
    width: 100px;
    position: absolute;
    top: -3vh;
  `,
};

export const TitleRectangle = styled.div`
  ${({ theme }) => rectangleStyles[theme]}
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
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-left: 3vw;
  margin-right: 3vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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


