import React from 'react';
import InputLabel from '../InputLabel';
import styled from 'styled-components';

const WrapperModal = styled.div`
  border: 1px solid green;
  width: 40%;
  height: 30%;
  padding: 20px;
`;

const WrapperTitle = styled.div``;

const WrapperInputLabels = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TitleModal = styled.p`
  color: #182c3f;
  font-size: 34px;
  font-family: Babes, sans-serif;
`;

const AgregarVacante = (props) => {
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
    </WrapperModal>
  );
};

export default AgregarVacante;
