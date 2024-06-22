import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  height: 74vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 21vh;
  padding: 2vh 0;
  overflow: hidden;
  margin-left: 10vw;
`;

export const InfoContainer = styled.div`
  width: 80vw;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24vh 10vw 5vh 10vw;
  gap: 25vw;
  // border: 10px solid black;
`;

export const MyInfo = styled.div`
  width: 20vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1vw;
  // border: 10px solid black;
`;

export const BadgeImage = styled.img`
  width: 8vh;
  height: 8vh;
  background-color: white;
  border: 1px solid black;
`;

export const ButtonGroup = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2vw;
  // border: 10px solid black;
`;

export const SubmissionContainer = styled.div`
  width: 80vw;
  display: flex;
  position: relative;
  margin: 3vh 0 0 10vw;
  // border: 10px solid black;
`;

export const OngoingSubmissionContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  padding: 4vh 4vw;
  width: 80vw;
  height: 30vh;
  display: flex;
  gap: 3vw;
  flex-wrap: nowrap;
  margin-top: 2vh;
  position: relative;
  overflow-x: auto;
  // border: 10px solid black;
`;

export const Submission = styled.div`
  width: 25vw;
  height: 20vh;
  background-color: gray;
`;

export const SubmissionTitle = styled.div`
  position: absolute;
  top: 0;
  left: 4vw;
  // border: 10px solid red;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PaginationButtonLeft = styled.button`
  font-family: 'Crayon', sans-serif;
  width: 5%;
  font-size: 2em;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;

export const PaginationButtonRight = styled.button`
  font-family: 'Crayon', sans-serif;
  width: 5%;
  font-size: 2em;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;
