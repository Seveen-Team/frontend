import React from 'react';
import { WrapperSidebar, Anchor, Text, CloseButton, ListContent } from './styles';

const Sidebar = ({ open, action }) => {

  const handleClose = () => {
    action('false');
  }

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
