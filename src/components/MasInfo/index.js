import React from 'react';
import styled from 'styled-components';
import Chips from '../Chips';

const WrapperMasInfo = styled.div`
  width: 100%;
  padding: 5px 5px 10px;
  margin: 15px 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  border-radius: 3px;
`;

const WrapperColumns = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleCompany = styled.p`
  font-size: 20px;
  margin: 5px 0;
`;

const Description = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 5px 10px;
`;

const ListOfInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 25px;
  width: 25px;
  margin: 5px;
  line-height: 25px;
  border: none;
  border-radius: 50%;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  outline: none;
`;

const MasInfo = (props) => {
  const { empresa } = props;
  return (
    <WrapperMasInfo>
      <TitleCompany>{empresa || 'Sin Empresa'}</TitleCompany>
      <WrapperColumns>
        <Chips />
      </WrapperColumns>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint harum
        natus sit facilis magni.
      </Description>
      <ListOfInput>
        <Input type="submit" value="-" />
        <Input type="submit" value="+" />
      </ListOfInput>
    </WrapperMasInfo>
  );
};

export default MasInfo;
