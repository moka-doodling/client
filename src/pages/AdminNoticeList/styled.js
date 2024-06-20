import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(65%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  gap: 40px;
`;

export const TableWrapper = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin: 0 auto;
`;

export const StyledRectangle = styled.div`
  width: 80%;
  height: 80%;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  padding: 20px;
`;

export const ButtonGroup = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10vw;.
`;

export const TitleRectangle = styled.div`
  border-radius: 5px;
  border: 3px solid black;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6vh;
  background-color: #8ED8AC;
  width: 10vw;
  position: relative;
  top: -5vh;
`;



