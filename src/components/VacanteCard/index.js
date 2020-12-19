import React from 'react';
import {
  WrapperCard,
  WrapperLevel,
  WrapperBase,
  WrapperItem,
  Title,
  Text,
  Info,
} from './styles';

const VacanteCard = (props) => {
  const {
    Cargo,
    NombreCargo,
    Empresa,
    NombreEmpresa,
    Modalidad,
    NombreModalida,
    Pais,
    NombrePais,
    Tecnologias,
    NombresTecnologias
  } = props;

  return (
    <WrapperCard>
      <WrapperLevel>
        <WrapperItem>
          <Title>{Cargo || 'Titulo'}</Title>
          <Text>{NombreCargo || 'Cargo'}</Text>
        </WrapperItem>
        <WrapperItem>
          <Title>{Empresa || 'Empresa'}</Title>
          <Text>{NombreEmpresa || 'Nombre Empresa'}</Text>
        </WrapperItem>
      </WrapperLevel>
      <WrapperLevel>
        <WrapperItem>
          <Title>{Modalidad || 'Modalidad'}</Title>
          <Text>{NombreModalida || 'Nombre Modalidad'}</Text>
        </WrapperItem>
        <WrapperItem>
          <Title>{Pais || 'Pais'}</Title>
          <Text>{NombrePais || 'Nombre Pais'}</Text>
        </WrapperItem>
      </WrapperLevel>
      <WrapperBase>
        <Title>{Tecnologias || 'Tecnologias'}</Title>
        <Text>{NombresTecnologias || 'Nombre Tecnologias'}</Text>
      </WrapperBase>
      <Info>Más info ...</Info>
    </WrapperCard>
  );
};

export default VacanteCard;
