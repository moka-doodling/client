import styled from 'styled-components';

export const Container = styled.div`
  margin: 8vh 0;
  width: 76vw;
  height: 78vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 50px;
  background: #e5e5e5;
  padding: 2vw;
`;

export const Image = styled.img`
  width: 20%;
  height: auto;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4vw;
`;

export const PageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageButton = styled.button`
  font-family: 'Crayon', sans-serif;
  font-size: 1em;
  margin: 0 5px;
  padding: 5px 10px;
  background: ${({ isActive }) => (isActive ? 'black' : 'none')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  border-radius: 6px;
  border: 2px solid #000;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: black;
    color: white;
  }
`;
