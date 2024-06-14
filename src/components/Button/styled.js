import styled, { css } from 'styled-components';

const commonStyles = css`
  width: 5vw;
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
    background: white;
    &:hover {
      background-color: #fcf390;
    }
  `,
  yellowBtn: css`
    ${commonStyles}
    background: #fcf390;
  `,
  whiteBtn: css`
    ${commonStyles}
    background: white;
  `,
};

export const StyledButton = styled.button`
  ${({ theme }) => buttonStyles[theme]}
`;
