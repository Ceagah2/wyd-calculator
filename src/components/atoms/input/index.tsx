import React from 'react';
import { StyledInput } from './styles';
export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

