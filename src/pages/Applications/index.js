import React from 'react';
import {
  Title,
  ApplicationsContainer,
  ListContainer,
  Subtitle,
} from './styles';

const Applications = () => {
  return (
    <>
      <Title>Aplicaciones</Title>
      <ApplicationsContainer>
        <ListContainer>
          <Subtitle>Me interesan</Subtitle>
        </ListContainer>
        <ListContainer>
          <Subtitle>En Proceso</Subtitle>
        </ListContainer>
        <ListContainer>
          <Subtitle>Finalizado</Subtitle>
        </ListContainer>
      </ApplicationsContainer>
    </>
  );
};

export default Applications;
