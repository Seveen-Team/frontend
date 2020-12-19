import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { intoScreen, outScreen } from '../../styles/animation';

const WrapperSidebar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  height: calc(100vh - 80px);
  box-shadow:5px 0px 10px rgba(0,0,0,0.3);
  width: 220px;
  padding-top: 20px;
  background-color: ${props =>props.theme.white} !important;
  @media screen and (max-width: 578px) {
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 2;
    ${props => props.state === '' && css`
      margin-left: -100%;
    `}
    ${props => props.state === 'true' && css`
      ${intoScreen()};
    `};
    ${props => props.state === 'false' && css`
      ${outScreen()};
    `};
  }
`;

const Anchor = styled(Link)`
  width: 100%;
  text-decoration: none;
  padding: 10px;
  display: inline-block;
  
  &:hover {
    Background-color: #98CA3E;
    box-shadow: 10px 0px 15px rgba(0,0,0,0.3);
  }

`;

const Text = styled.span`
  color: #182c3f;
  font-size: 18px;
  font-family: Babes, sans-serif;
  margin-left: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12.5px;
  right: 15px;
  padding: 7.5px 12.5px;
  border: none;
  outline: none;
  background-color: #ddd;
  border-radius: 50%;
  color: '#ddd';

  @media screen and (min-width: 578px) {
    display: none;
  }
`;

const ListContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 578px) {
    margin-top: 30px;
  }
`;

export { WrapperSidebar, Anchor, Text, CloseButton, ListContent };
