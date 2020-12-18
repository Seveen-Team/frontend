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

class VacanteCard extends React.Component {
  render() {
    return (
      <WrapperCard>
        <WrapperLevel>
          <WrapperItem>
            <Title>{this.props.Cargo}</Title>
            <Text>{this.props.NombreCargo}</Text>
          </WrapperItem>
          <WrapperItem>
            <Title>{this.props.Empresa}</Title>
            <Text>{this.props.NombreEmpresa}</Text>
          </WrapperItem>
        </WrapperLevel>
        <WrapperLevel>
          <WrapperItem>
            <Title>{this.props.Modalida}</Title>
            <Text>{this.props.NombreModalida}</Text>
          </WrapperItem>
          <WrapperItem>
            <Title>{this.props.Pais}</Title>
            <Text>{this.props.NombrePais}</Text>
          </WrapperItem>
        </WrapperLevel>
        <WrapperBase>
          <Title>{this.props.Tecnologias}</Title>
          <Text>{this.props.NombresTecologias}</Text>
        </WrapperBase>
        <Info>Más info ...</Info>
      </WrapperCard>
    );
  }
}

export default VacanteCard;
