import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
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
`;

export const Rectangle = styled.div`
  width: 15vw;
  height: 4vw;
  background-color: ${(props) =>
    props.theme === 'yellow' ? '#fcf390' : '#BACDE6'};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const CustomText2 = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const Img1 = styled.img`
  position: absolute;
  top: -60px;
  left: 70px;
  width: 55%;
  height: 55%;
`;

export const Img2 = styled.img`
  position: absolute;
  top: 20px;
  right: -20px;
  width: 70%;
  height: 70%;
`;
