import React from 'react';
import {
  Title,
  ApplicationsContainer,
  ListContainer,
  Subtitle,
  List
} from './styles';
import MasInfo from '../../components/MasInfo/index';

const Applications = () => {
  return (
    <>
      <Title>Aplicaciones</Title>
      <ApplicationsContainer>
        <ListContainer>
          <Subtitle>Me interesan</Subtitle>
          <List>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <li key={index}>
                <h1>Hello</h1>
              </li>
            ))}
          </List>
        </ListContainer>
        <ListContainer>
          <Subtitle>En Proceso</Subtitle>
          <List>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <li key={index}>
                <h1>Hello</h1>
              </li>
            ))}
          </List>
        </ListContainer>
        <ListContainer>
          <Subtitle>Finalizado</Subtitle>
          <List>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <li key={index}>
                <h1>Hello</h1>
              </li>
            ))}
          </List>
        </ListContainer>
      </ApplicationsContainer>
    </>
  );
};

export default Applications;
