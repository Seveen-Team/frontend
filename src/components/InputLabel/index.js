import React from 'react';
import { WrapperInputLabel, Label, Input } from './styles';

const InputLabel = () => {
  return (
    <WrapperInputLabel>
      <Label> Título</Label>
      <Input type="text" placeholder="Título" />
    </WrapperInputLabel>
  );
};

export default InputLabel;
