import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  gap: 40px;
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
  height: 70vh;
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
  padding-top: 5vh;.
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
  width: 15vw;
`;

export const TitleWrapper = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
  position: absolute;
  top: -3vh;
  gap: 1vw;
`;

export const Img= styled.img`
  width: 5vw;
`;

export const ContentRectangle = styled.div`
  width: 50vw;
  height: 40vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  gap: 5vh;
  padding: 20px;
`;
