import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { ContentChild } from './style';

const styles = ({ children }) => {
  const [action, setAction] = useState('');

  return (
    <>
      <Header open={action} action={setAction} />
      <Sidebar open={action} action={setAction} />
      <ContentChild>
        { children }
      </ContentChild>
    </>
  );
}

export default styles;