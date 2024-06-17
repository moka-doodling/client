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
  height: 20vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  display: flex;
  top: center;

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
  gap: 50px;
  margin-bottom: 25px;
`;


export const Img= styled.img`
  width: 70%;
  height: 70%;
  align-self: center; 
  justify-self: center;
  margin-top: 20px;
`;



