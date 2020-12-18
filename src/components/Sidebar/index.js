import React from 'react';
import { WrapperSidebar, Anchor, Text } from './styles';

const Sidebar = () => {
  return (
    <WrapperSidebar>
      <Anchor to="/">
        <Text>Vacantes</Text>
      </Anchor>
      <Anchor to="/test">
        <Text>Mis aplicaciones</Text>
      </Anchor>
    </WrapperSidebar>
  );
}

export default Sidebar;
