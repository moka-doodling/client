import styled, { css } from 'styled-components';

const commonStyles = css`
  width: 10vw;
  height: 6vh;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  transition: background-color 0.3s ease;
`;

const inputFieldStyles = {
  loginForm: css`
    ${commonStyles}
    width: 15vw;
    padding: 0.5vh 1vh;
    font-size: 2vh;
    &::placeholder {
      color: gray;
    }
  `,
};

export const StyledInputField = styled.input`
  ${({ theme }) => inputFieldStyles[theme]}
`;
