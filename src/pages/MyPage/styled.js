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
  margin-top: 24vh;
  margin-left: 10vw;
  padding: 0 6vw;
  gap: 20vw;
`;

export const MyInfo = styled.div`
  width: 20vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1vw;
`;

export const BadgeImage = styled.img`
  width: 8vh;
  height: 8vh;
  background-color: white;
  border: 1px solid black
`;

export const ButtonGroup = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2vw;
`;

export const SubmissionContainer = styled.div`
  width: 80vw;
  margin-top: 5vh;
  display: flex;
  position: relative;
  margin-left: 10vw;
  // border: 10px solid black
`;

export const OngoingSubmissionContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  padding: 3vh 3vw;
  width: 80vw;
  height: 30vh;
  display: flex;
  gap: 3vw;
  flex-wrap: nowrap;
  margin-top: 6vh;
  overflow-x: auto;
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
`;