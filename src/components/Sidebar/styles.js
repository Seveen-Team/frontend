import styled from 'styled-components';

const WrapperSidebar = styled.div`
  height: 90vh;
  width: 25vw;
  display: flex;
  flex-direction: column;
`;

const Anchor = styled.a`
  text-decoration: none;
  padding: 10px;
  
  &:hover {
    Background-color: #98CA3E;
`;

const Text = styled.span`
  color: #182c3f;
  font-size: 24px;
  font-family: Babes, sans-serif;
  margin-left: 10px;
`;

export { WrapperSidebar, Anchor, Text };
