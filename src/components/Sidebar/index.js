import React from 'react';
import { WrapperSidebar, Anchor, Text, CloseButton, ListContent } from './styles';

const Sidebar = ({ open, action }) => {

  const handleClose = () => {
    action('false');
  }

  return (
    <WrapperSidebar state={open}>
      <CloseButton type='button' onClick={handleClose}>
        X
      </CloseButton>
      <ListContent>
        <Anchor to="/">
          <Text>Dashboard</Text>
        </Anchor>
        <Anchor to="/vacancies">
          <Text>Vacantes</Text>
        </Anchor>
        <Anchor to="/applications">
          <Text>Mis aplicaciones</Text>
        </Anchor>
      </ListContent>
    </WrapperSidebar>
  );
}

export default Sidebar;
