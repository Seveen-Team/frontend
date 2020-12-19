import React from 'react';
import Chips from '../Chips';
import styled from 'styled-components';

const WrapperMasInfo = styled.div`
  width: 50%;
  heigth: 50%;
  box-shadow: 3px 3px 6px gray;
  padding: 20px;
`;

const WrapperColumns = styled.div`
  display: flex;
`;

const WrapperLeft = styled.div`
  width: 66%;
`;

const WrapperRight = styled.div`
  width: 33%;
  padding-left: 35px;
`;

const Title = styled.p`
  width: 90%;
  padding: 5px;
  margin: 5px;
  font-size: 24px;
  font-family: Babes, sans-serif;
`;

const Details = styled.p``;

const TitleCompany = styled.p`
  font-size: 34px;
`;

const List = styled.ul``;

const Item = styled.li`
  margin-top: 15px;
`;

const MasInfo = () => {
  return (
    <WrapperMasInfo>
      <TitleCompany>Globant</TitleCompany>
      <WrapperColumns>
        <WrapperLeft>
          <Chips />
          <Title>Empresa</Title>
          <Details>
            Mono es una startup colombiana. Estamos creando una banca digital
            para empresas en Colombia, somos un equipo con gran experiencia en
            fintech.
          </Details>
          <Title>Dirección Web</Title>
          <Details>Mono es una startup colombiana.</Details>
          <Title>Responsabilidades</Title>
          <Details>
            Mono es una startup colombiana. Estamos creando una banca digital
            para empresas en Colombia, somos un equipo con gran experiencia en
            fintech.
          </Details>
        </WrapperLeft>
        <WrapperRight>
          <Title>Requisitos Técnicos</Title>
          <List>
            <Item>Mono es una startup colombiana.</Item>
            <Item>Mono es una startup colombiana.</Item>
            <Item>Mono es una startup colombiana.</Item>
          </List>
        </WrapperRight>
      </WrapperColumns>
    </WrapperMasInfo>
  );
};

export default MasInfo;
