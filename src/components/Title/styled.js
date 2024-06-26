import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CustomText = styled.p`
  position: absolute;
  top: -20px;
  left: center;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000, 2px 2px 0 #000;
  z-index: 1;
`;

export const Rectangle = styled.div`
  width: 15vw;
  height: 4vw;
  background-color: ${(props) =>
    props.theme === 'yellow'
      ? '#fcf390'
      : props.theme === 'booklist'
      ? '#D8BFD8'
      : props.theme === 'notice'
      ? '#8ed8ac'
      : '#BACDE6'};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
`;

export const CustomText2 = styled.p`
  font-size: 1.5vw;
  text-align: center;
  font-weight: bold;
`;

export const Img1 = styled.img`
  position: absolute;
  top: -30%;
  left: 0%;
  transform: translate(-50%, -50%);
  width: 4vw;
  height: 4vw;
`;

export const Img2 = styled.img`
  position: absolute;
  bottom: 0%;
  right: -70%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  ${({ theme }) =>
    theme === 'notice' &&
    `
    transform: scaleX(-1) rotate(-15deg);
    bottom: 10%;
    right: -30%;
  `}
`;
