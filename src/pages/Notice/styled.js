import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 22vh;
  padding-top: 6vh;
`;

export const TableWrapper = styled.div`
  height: 60vh;
  width: 50vw;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding-right: 20px; 
  margin: 0 auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  &::-webkit-scrollbar {
    width: 2vw; 
    background-color: white;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fcf390; /* 스크롤바 색상 */
    border: 3px solid black;
    height: 7vh;
    border-radius: 50px; /* 스크롤바 모양 */
  }
`;

export const StyledRectangle = styled.div`
  width: 60vw;
  max-width: 100%;
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
