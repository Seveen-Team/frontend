import React from 'react';
import { WrapperSidebar, Anchor, Text } from './styles';

class Sidebar extends React.Component {
  render() {
    return (
      <WrapperSidebar>
        <Anchor href="/">
          <Text>Vacantes</Text>
        </Anchor>
        <Anchor href="/">
          <Text>Mis aplicaciones</Text>
        </Anchor>
      </WrapperSidebar>
    );
  }
}

export default Sidebar;
