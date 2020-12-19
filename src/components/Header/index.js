import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  WrapperHeader,
  ImgLogo,
  WrapperUser,
  ImgPhoto,
  Name,
  BurgerButton,
  BurgerIcon
} from './styles';
import Variables from '../../styles/vars';

const Header = ({ action }) => {

  const Logo = "https://firebasestorage.googleapis.com/v0/b/platzi-master-21d21.appspot.com/o/Assets%2FlogoPM.png?alt=media&token=96438203-1626-42fb-aa18-f20ffc2abc3a";
  const PhotoProfile = "https://firebasestorage.googleapis.com/v0/b/platzi-master-21d21.appspot.com/o/Assets%2Fhero.jpg?alt=media&token=e4b8cefe-ca98-42d5-aba7-1521e715edf6";

  const handleOpen = () => {
    action('true');
  }

  return (
    <ThemeProvider theme={Variables}>
      <WrapperHeader>
        <ImgLogo src={Logo} />
        <BurgerButton onClick={handleOpen}>
          <BurgerIcon />
        </BurgerButton>
        <WrapperUser>
          <ImgPhoto src={PhotoProfile} />
          <Name>Pepito perez shbdshgds</Name>
        </WrapperUser>
      </WrapperHeader>
    </ThemeProvider>
  );
}

export default Header;
