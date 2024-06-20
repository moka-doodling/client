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
  width: 100vw;
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  gap: 40px;
  margin-top: 20vh;
  margin-bottom: 10vh;
`;

export const TableWrapper = styled.div`
  height: 60vh;
  width: 50vw;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin: 0 auto;
`;

export const StyledRectangle = styled.div`
  width: 60vw;
  height: 50vh;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  gap: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
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



