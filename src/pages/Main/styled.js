import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 74vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 21vh;
  padding: 2vh 0;
  overflow: hidden;
`;

export const Copy = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  position: relative;
  margin: 2vh 0;
`;

export const CopyDetail = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1vh 0;

  .yellow-highlight {
    background-color: rgba(252, 243, 144);
  }

  .purple-highlight {
    background-color: rgba(167, 129, 252, 0.5);
  }
`;

export const Leftquote = styled.img`
  position: absolute;
  left: -40px;
  top: -10px;
  width: 40px;
  height: auto;
`;

export const Rightquote = styled.img`
  position: absolute;
  right: -40px;
  bottom: -10px;
  width: 40px;
  height: auto;
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 80vw;
  height: 30vh;
`;

export const BookBackground = styled.img`
  position: absolute;
  width: 80vw;
  height: 65vh;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TreeImg = styled.img`
  position: absolute;
  width: 10vw;
  top: 0%;
  left: 0%;
  transform: rotate(-15deg);
  z-index: 1;
`;

export const BookImg = styled.img`
  position: absolute;
  width: 10vw;
  top: 15%;
  right: 3%;
  z-index: 2;
`;

export const DummyBook = styled.img`
  position: absolute;
  width: 10vw;
  top: -30%;
  right: 0%;
  z-index: 1;
`;

export const Pencil = styled.img`
  position: absolute;
  width: 5vw;
  top: 5%;
  right: 3%;
  z-index: 3;
`;

export const InfoDetail = styled.img`
  position: absolute;
  width: 75%;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
