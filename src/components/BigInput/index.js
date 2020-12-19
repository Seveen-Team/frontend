import React from 'react';
import { WrapperInputLabel, Label, Input } from './styles';

const BigInput = () => {
  return (
    <WrapperInputLabel>
      <Label> Descripción </Label>
      <Input type="text" />
    </WrapperInputLabel>
  );
};

export default BigInput;
