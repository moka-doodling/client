import styled from 'styled-components';
import imgsrc from '../../assets/images/book_mockup.png';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 22vh;
  padding-top: 6vh;
`;

export const BookContainer = styled.div`
  width: 12vw;
  height: 30vh;
  padding-left: 1vw;
  padding-top: 2vh;
  background-image: url(${imgsrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const Cover = styled.img`
  width: 60%;
  height: auto;
`;

export const BookTitle = styled.p`
  margin-top: 5%;
  text-align: center;
  font-family: 'Crayon', sans-serif;
`;

export const CrownImage = styled.img`
  top: -100%;
  left: -20%;
  width: 3vw;
  height: auto;
  transform: translate(-50%, -50%);
  position: absolute;
  transform: rotate(-10deg);
  z-index: 2;
`;

export const StyledButton = styled.button`
  margin-top: 10%;
  height: 5vh;
  width: 50%;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  cursor: pointer;
  position: relative;
`;

export const CategoryWrapper = styled.div`
  width: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 2vw;
  font-family: 'Crayon', sans-serif;
  z-index: 1;
`;

export const TopImage = styled.img`
  width: 8vw;
  height: auto;
  transform: rotate(7deg);
`;

export const BottomImage = styled.img`
  width: 8vw;
  height: auto;
  transform: rotate(7deg);
`;

export const Shelf = styled.div`
  width: 65vw;
  margin-top: 5vh;
  margin-bottom: 10vh;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const ShelfImage = styled.img`
  width: 90vw;
  height: auto;
  bottom: -50%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;
