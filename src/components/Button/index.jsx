import React from 'react';
import { StyledButton } from './styled';

const Button = ({ theme, onClick, children, disabled }) => {
  return (
    <StyledButton
      type="button"
      theme={theme}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
