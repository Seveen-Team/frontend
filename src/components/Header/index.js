import React from 'react';
import LogoPM from '../../assets/logoPM.png';
import Photo from '../../assets/hero.jpg';
import { WrapperHeader, ImgLogo, WrapperUser, ImgPhoto, Name } from './styles';

class Header extends React.Component {
  render() {
    return (
      <WrapperHeader>
        <ImgLogo src={LogoPM} />
        <WrapperUser>
          <ImgPhoto src={Photo} />
          <Name>Pepito perez</Name>
        </WrapperUser>
      </WrapperHeader>
    );
  }
}

export default Header;
