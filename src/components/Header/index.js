import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  WrapperHeader,
  ImgLogo,
  WrapperUser,
  ImgPhoto,
  Name,
  Icon,
  BurgerButton,
  BurgerIcon
} from './styles';
import Variables from '../../styles/vars';
import LogoPM from '../../assets/logoPM.png';
import Photo from '../../assets/hero.jpg';

const Header = ({ action }) => {

  const handleOpen = () => {
    action('true');
  }

  return (
    <ThemeProvider theme={Variables}>
      <WrapperHeader>
        <ImgLogo src={LogoPM} />
        <BurgerButton onClick={handleOpen}>
          <BurgerIcon />
        </BurgerButton>
        <WrapperUser>
          <ImgPhoto src={Photo} />
          <Name>Pepito perez shbdshgds</Name>
          <Icon />
        </WrapperUser>
      </WrapperHeader>
    </ThemeProvider>
  );
}

export default Header;
