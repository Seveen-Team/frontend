import React from 'react';
import styled from 'styled-components';
import InfoDetallada from '../InfoDetallada';
import Chips from '../Chips';

const WrapperMasInfo = styled.div`
  width: 100%;
`;

const WrapperColumns = styled.div`
  display: flex;
`;

const WrapperLeft = styled.div`
  width: 66%;
`;

const WrapperRight = styled.div`
  width: 33%;
`;

const TitleCompany = styled.p`
  font-size: 34px;
`;

const TitleRequisitos = styled.p``;

const DetailsRequisitos = styled.p``;

const MasInfo = () => {
  return (
    <WrapperMasInfo>
      <TitleCompany>Globant</TitleCompany>
      <WrapperColumns>
        <WrapperLeft>
          <Chips />
          <InfoDetallada />
        </WrapperLeft>
        <WrapperRight>
          <TitleRequisitos>Requisitos Técnicos</TitleRequisitos>
          <DetailsRequisitos>JIjdiededj</DetailsRequisitos>
        </WrapperRight>
      </WrapperColumns>
    </WrapperMasInfo>
  );
};

export default MasInfo;
