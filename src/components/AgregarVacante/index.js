import React from 'react';
import InputLabel from '../InputLabel';
import BigInput from '../BigInput';
import {
  WrapperModal,
  WrapperTitle,
  WrapperInputLabels,
  WrapperBottom,
  WrapperButtom,
  TitleModal,
  Bottom,
} from './styles';

const AgregarVacante = () => {
  return (
    <WrapperModal>
      <WrapperTitle>
        <TitleModal> Agregar Vacante</TitleModal>
      </WrapperTitle>
      <WrapperInputLabels>
        <InputLabel />
        <InputLabel />
        <InputLabel />
        <InputLabel />
        <InputLabel />
        <InputLabel />
      </WrapperInputLabels>
      <WrapperBottom>
        <BigInput />
        <BigInput />
      </WrapperBottom>
      <WrapperButtom>
        <Bottom>Agrega propuesta </Bottom>
      </WrapperButtom>
    </WrapperModal>
  );
};

export default AgregarVacante;
