import styled from 'styled-components';

export const Container = styled.div`
  margin: 8vh 0;
  width: 76vw;
  height: 68vh;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-end;
  gap: 2vw;
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
