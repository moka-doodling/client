import styled, { css } from 'styled-components';

const buttonStyles = {
  CanvasSettingBtn: css`
    width: 5vw;
    height: 6vh;
    border-radius: 5px;
    background: white;
    border: 3px solid black;
    box-shadow: 4px 4px 0px 0px black;
    transition: background-color 0.3s ease;

    &:active,
    &:focus {
      transform: scale(0.95);
    }

    &:hover {
      transform: scale(1);
      background-color: #fcf390;
      cursor: pointer;
    }
  `,
};

export const StyledButton = styled.button`
  ${({ theme }) => buttonStyles[theme]}
`;
