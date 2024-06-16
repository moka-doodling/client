import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 30vh;
  justify-content: space-between;
  padding: 10px;
  border-radius: 3vw;
  background: #e5e5e5;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 60vw;
  height: 30vh;
  gap: 1vw;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselButton = styled.button`
  font-family: 'Crayon', sans-serif;
  width: 5%;
  font-size: 2em;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;

export const Wrapper = styled.div`
  flex: 0 0 auto;
`;
