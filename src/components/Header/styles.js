import styled from 'styled-components';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

const WrapperHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 0 40px 0 15px;
  background-color: ${props => props.theme.secundary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 578px) and (orientation: portrait) {
    padding: 0 20px;
    height: 80px;
    justify-content: space-between;
  }
  @media screen and (min-width: 578.1px) and (max-width: 1024px) and (orientation: portrait) {
    padding: 0 10px;
    height: 80px;
    justify-content: space-between;
  }
`;

const ImgLogo = styled.img`
  width: 200px;
  height: 70px;
  @media screen and (max-width: 578px) and (orientation: portrait) {
    width: 150px;
    height: 50px;
  }
`;

const WrapperUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-radius: 30px;
  padding: 5px 15px 5px 5px;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme.hover};
  }
  @media screen and (max-width: 578px) {
    display: none;
  }
`;

const ImgPhoto = styled.img`
  height: 50px;
  width: 50px;
  max-height: 50px;
  max-width: 50px;
  border-radius: 50px;
  object-fit: cover;
`;

const Name = styled.p`
  max-width: 150px;
  max-height: 24px;
  color: ${props => props.theme.white};
  font-size: 24px;
  font-family: Babes, sans-serif;
  margin-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Icon = styled(IoMdArrowDropdown)`
  display: inline-block;
  color: ${props => props.theme.white};
  font-size: 32px;
`;

const BurgerButton = styled.button`
  background-color: transparent;
  padding: 5px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  &:hover, :focus {
    background-color: ${props => props.theme.hover};
  }
  @media screen and (min-width: 578px) {
    opacity: 0;
    visibility: hidden;
  }
`;

const BurgerIcon = styled(GiHamburgerMenu)`
  display: inline-block;
  color: #fff;
  font-size: 32px;
`;

export {
  WrapperHeader,
  ImgLogo,
  WrapperUser,
  ImgPhoto,
  Name,
  Icon,
  BurgerButton,
  BurgerIcon
};
