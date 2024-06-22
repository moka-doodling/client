import styled from 'styled-components';
import button_next from '../../assets/images/button_next.svg';
import button_prev from '../../assets/images/button_prev.svg';
import board_image from '../../assets/images/board_image.svg';

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
  height: 28vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24vh 10vw 5vh 10vw;
`;
export const BadgeInfoContainer = styled.img`
  width: 25vw;
  // border: 10px solid black;
`;

export const BadgeInfoGroup = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  padding: 0 2vw;
  // border: 10px solid black;
`;

export const MyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1vw;
  // border: 10px solid black;
`;

export const BadgeImage = styled.img`
  width: 6vh;
  height: 6vh;
  background-color: white;
  // border: 1px solid black;
`;

export const ButtonGroup = styled.div`
  width: 8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
  // border: 10px solid black;
`;

export const SubmissionContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin: 3vh 0 0 10vw;
  // border: 10px solid black;
`;

export const SubmissionPageBtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 10px solid red;
`;

export const OngoingSubmissionContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  padding: 3vh 4vw 3vh 2vw;
  width: 100%;
  height: 30vh;
  display: flex;
  gap: 3vw;
  flex-wrap: nowrap;
  margin-top: 5vh;
  position: relative;
  overflow-x: auto;
  radius: 10px;
  border: 3px solid black;
  border-radius: 5px;
  background-color: white;
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  // border: 10px solid black;
`;

export const Submission = styled.div`
  width: 25vw;
  height: 20vh;
  background-color: gray;
`;

export const SubmissionTitle = styled.div`
  height: 5vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  padding: 0 2vw;
  // border: 10px solid red;
`;

export const PaginationButtonLeft = styled.button`
  background-image: url(${button_prev});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 3.5vw;
  height: 6vh;
  border: none;
  cursor: pointer;
  background-color: transparent;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

export const PaginationButtonRight = styled.button`
  background-image: url(${button_next});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 3.5vw;
  height: 6vh;
  border: none;
  cursor: pointer;
  background-color: transparent;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;
