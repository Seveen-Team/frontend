import React from 'react';
import { Label as LabelContent } from './styles';

const Label = ({ data, color, letter }) => {
  return (
    <LabelContent color={color} letter={letter}>
      {data}
    </LabelContent>
  );
}

export default Label;