import React from 'react';
import {
  Title,
  ApplicationsContainer,
  ListContainer,
  Subtitle,
  List,
  Container,
} from './styles';
import MasInfo from '../../components/MasInfo/index';

const Applications = () => {
  return (
    <>
      <Title>Aplicaciones</Title>
      <ApplicationsContainer>
        <ListContainer>
          <Subtitle>Me interesan</Subtitle>
          <Container>
            <List>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <li key={index}>
                  <MasInfo />
                </li>
              ))}
            </List>
          </Container>
        </ListContainer>
        <ListContainer>
          <Subtitle>En Proceso</Subtitle>
          <Container>
            <List>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <li key={index}>
                  <MasInfo />
                </li>
              ))}
            </List>
          </Container>
        </ListContainer>
        <ListContainer>
          <Subtitle>Finalizado</Subtitle>
          <Container>
            <List>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <li key={index}>
                  <MasInfo />
                </li>
              ))}
            </List>
          </Container>
        </ListContainer>
      </ApplicationsContainer>
    </>
  );
};

export default Applications;
