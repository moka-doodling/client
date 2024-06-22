import styled from 'styled-components';
import note from '../../assets/images/bookcontent.svg';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 22vh;
  padding-top: 6vh;
`;

export const TableWrapper = styled.div`
  height: 60vh;
  width: 50vw;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin: 0 auto;
`;

export const StyledRectangle = styled.div`
  width: 60vw;
  height: 70vh;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  gap: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
`;

export const TextContainer = styled.div`
  width: 85%;
  text-align: left;
`;

export const ButtonGroup = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5vh;.
`;

export const ContentRectangle = styled.div`
  width: 50vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  font-size: 1.4vw;
  gap: 5vh;
  padding: 2vw;
  background-image: url(${note});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  white-space: pre-wrap;
  white-space: pre-line;
`;
