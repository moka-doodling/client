import React from 'react';
import { StyledInputField } from './styled';

const InputField = ({ theme, placeholder, value, onChange, type, children }) => {
  return (
    <div>
      <StyledInputField
        theme={theme}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type = {type}
      >
        {children}
      </StyledInputField>
    </div>
  );
};

export default InputField;
