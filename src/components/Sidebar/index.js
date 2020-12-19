import React from 'react';
import { WrapperSidebar, Anchor, Text } from './styles';

const Sidebar = () => {
  return (
    <WrapperSidebar>
      <Anchor to="/vacancies">
        <Text>Vacantes</Text>
      </Anchor>
      <Anchor to="/">
        <Text>Mis aplicaciones</Text>
      </Anchor>
    </WrapperSidebar>
  );
}

export default Sidebar;
