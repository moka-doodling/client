import styled from 'styled-components';

const textStyles = {
  text1: {
    fontWeight: 'bold',
    fontSize: '12px',
    color: 'white',
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: '50px',
    color: 'black',
  },
};

export const StyledText = styled.p`
  ${(props) => textStyles[props.theme]}
`;
