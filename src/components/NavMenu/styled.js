import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 9vw;
`;

export const Circle = styled.div`
  width: 3.5vw;
  height: 3.5vw;
  background-color: #fcf390;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
`;

export const Img = styled.img`
  width: 60%;
  height: 60%;
`;

export const Category = styled.div`
  margin-top: 10px;
  font-size: 1.2vw;
  text-align: center;
  font-weight: bold;
`;
