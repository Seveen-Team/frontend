import React from 'react';
import { WrapperSidebar, Anchor, Text, CloseButton, ListContent } from './styles';

const Sidebar = ({ open, action }) => {

  const handleClose = () => {
    action('false');
  }

  return (
<<<<<<< HEAD
    <WrapperSidebar>
      <Anchor to="/vacancies">
        <Text>Vacantes</Text>
      </Anchor>
      <Anchor to="/">
        <Text>Mis aplicaciones</Text>
      </Anchor>
=======
    <WrapperSidebar state={open}>
      <CloseButton type='button' onClick={handleClose}>
        X
      </CloseButton>
      <ListContent>
        <Anchor to="/">
          <Text>Vacantes</Text>
        </Anchor>
        <Anchor to="/test">
          <Text>Mis aplicaciones</Text>
        </Anchor>
      </ListContent>
>>>>>>> 4b6721d58470b38a6f58a2b54f7c507b6efe8b45
    </WrapperSidebar>
  );
}

export default Sidebar;
