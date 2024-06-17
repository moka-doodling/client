import React from 'react';
import { StyledInputField } from './styled';

const InputField = ({ theme, placeholder, children }) => {
  return (
    <div>
      <StyledInputField theme={theme} placeholder={placeholder}>
        {children}
      </StyledInputField>
    </div>
  );
};

export default InputField;
