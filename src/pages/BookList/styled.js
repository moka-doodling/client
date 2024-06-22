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

export const BookContainer = styled.div`
  flex: 0 0 auto;
  width: 12vw;
  height: 30vh;
  border: none;
  font-size: 1rem;
  z-index: 1;
  position: relative;
  margin-right: 2vw;
`;

export const BookImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const Cover = styled.img`
  width: 8vw;
  height: 12vh;
  position: absolute;
  top: 20%;
  left: 55%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const BookTitle = styled.p`
  width: 8vw;
  text-align: center;
  font-family: 'Crayon', sans-serif;
  position: absolute;
  top: 45%;
  left: 55%;
  transform: translate(-50%, -50%);
  z-index: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CrownImage = styled.img`
  top: -110%;
  left: -35%;
  width: 3vw;
  height: auto;
  transform: translate(-50%, -50%);
  position: absolute;
  transform: rotate(-30deg);
  z-index: 3;
`;

export const StyledButton = styled.button`
  width: 5vw;
  height: 4vh;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  cursor: pointer;
  position: absolute;
  top: 65%;
  left: 55%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const CategoryWrapper = styled.div`
  width: 10vw;
  margin-bottom: 5vh;
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
  margin-bottom: 5vh;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const ShelfImage = styled.img`
  width: 90vw;
  height: auto;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

export const PageButton = styled.img`
  font-family: 'Crayon', sans-serif;
  width: 5%;
  font-size: 3vw;
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transform: translateX(-50%);
  position: absolute;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  z-index: 1;
  ${({ theme }) =>
    theme === 'prev' &&
    `
  top: 30%;
  left: -5%;
  `}
  ${({ theme }) =>
    theme === 'next' &&
    `
  top: 30%;
  right: -10%;
  `}
`;
