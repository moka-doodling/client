import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 20vh;
  background: ${({ theme }) => (theme === 'yellow' ? '#FCF390' : '#fff')};
  box-shadow: 4px 4px 0px 0px #000;
`;

export const ImgWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border: 3px solid black;
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Crayon', sans-serif;
  font-weight: 300;
  text-align: center;
  width: 50%;
  height: 100%;
  border: 3px solid black;
`;

export const Sequence = styled.span`
  font-family: 'Crayon', sans-serif;
  font-weight: bold;
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  color: #fcf390;
  font-size: 2rem;
  text-shadow: 4px 4px 0px #000, 3px 3px 0px #000, 2px 2px 0px #000,
    1px 1px 0px #000;
`;
