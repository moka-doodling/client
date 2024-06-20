import styled, { css } from 'styled-components';

const commonStyles = css`
  height: 6vh;
  border-radius: 5px;
  border: 3px solid black;
  box-shadow: 4px 4px 0px 0px black;
  transition: background-color 0.3s ease;
  &:active,
  &:focus {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;

const buttonStyles = {
  CanvasSettingBtn: css`
    ${commonStyles}
    width: 5vw;
    background: white;
    &:hover {
      background-color: #fcf390;
    }
  `,
  yellowBtn: css`
    ${commonStyles}
    width: 5vw;
    background: #fcf390;
  `,
  whiteBtn: css`
    ${commonStyles}
    width: 5vw;
    background: white;
  `,
  extendedWhiteBtn: css`
    ${commonStyles}
    width: 10vw;
    background: white;
  `,
  loginBtn: css`
    ${commonStyles}
    background: white;
    font-size: 2vh;
    font-weight: bold;
    width: 10vw;
  `,
  withdrawBtn: css`
    ${commonStyles}
    background: white;
    font-size: 1rem;
    width: 10vw;
  `,
  changePwBtn: css`
    ${commonStyles}
    background: #fcf390;
    font-size: 1rem;
    width: 10vw;
  `,
};

export const StyledButton = styled.button`
  ${({ theme }) => buttonStyles[theme]}
`;
