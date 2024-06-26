import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  position: relative;
  padding: 1vh 0;
  // border: 10px solid red;
`;

export const BadgeImage = styled.img`
  width: 12vh;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -24%;
  right: -16%;
  z-index: 3;
  transform: rotate(20deg);
`;

export const StyledRectangle = styled.div`
  width: 20vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  transition: background-color 0.3s ease;
  background-color: white;
  position: relative; /* Ensure relative positioning for absolute children */
`;

export const CoverImg = styled.img`
  height: 45%;
  position: absolute;
  top: 60px;
`;

export const TitleRectangle = styled.div`
  width: 12vw;
  height: 5vh;
  border-radius: 5px;
  border: 3px solid black;
  transition: background-color 0.3s ease;
  background-color: #8ed8ac;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -15px;
  right: -18px;
`;
