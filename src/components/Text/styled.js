import styled from 'styled-components';

const textStyles = {
  text1: {
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'white',
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: '2.2rem',
    color: 'black',
  },
  text2: {
    fontFamily: 'Crayon',
    fontSize: '30px',
    color: 'black',
    textAlign: 'center',
  },
  text3: {
    fontSize: '20px',
    color: 'black',
    textAlign: 'center',
  },
  usernametext: {
    fontFamily: 'Crayon',
    fontSize: '3rem',
    textAlign: 'center',
  },
  text4: {
    fontFamily: 'Crayon',
    fontSize: '2rem',
    textAlign: 'center',
  },
  text5: {
    fontSize: '1rem',
    textAlign: 'center',
  },
  text6: {
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'left',
  },
  text7: {
    fontFamily: 'Crayon',
    fontSize: '3rem',
    textAlign: 'left',
    color: '#fcf390',
    textShadow: '2px 2px 3px rgba(0, 0, 0, 0.6)',
  },
  text8: {
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'left',
    color: 'red',
  },
  text9: {
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'center',
    color: 'red',
  },
  infotext: {
    fontSize: '2vw',
    color: 'black',
    fontWeight: 'bold',
  },
};

export const StyledText = styled.p`
  ${(props) => textStyles[props.theme]}
`;
