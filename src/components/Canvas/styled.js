import styled from 'styled-components';

export const CanvasContainer = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: space-between;
`;

export const CanvasSetting = styled.div`
  width: 20vw;
  height: 50vh;
  flex-direction: column;
`;

export const ColorWrapper = styled.div`
  width: 20vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 3vh;
  height: 15vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1vh;
  justify-items: center;
`;

export const StyledStage = styled.div`
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
`;
