import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WrapperSidebar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: calc(100vh - 80px);
  box-shadow: 10px 0px 15px rgba(0,0,0,0.3);
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  padding: 10px;
  
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

export { WrapperSidebar, Anchor, Text };
