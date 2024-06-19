import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row; 
  gap: 40px;
  margin-top: 40vh;
  margin-bottom: 10vh;
`;

export const ListWrapper = styled.div `
  width: 100vw;
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  justify-content: flex-start;
`;

export const AgeWrapper = styled.div `
  width: 15vw;
  height: 30vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  display: flex;

  ${(props) => props.theme === 'age1' && `
    left: -30px; 
  `}

  ${(props) => props.theme === 'age2' && `
    right: -30px;
  `}
`

export const StyledRectangle = styled.div`
  width: 70vw;
  height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 30px;
  position: relative;
  gap: 5vh;
  margin-bottom: 5vh;
`;


export const Img= styled.img`
  width: 15vw;
  height: auto;
  align-self: center; 
  justify-self: center;
`;



