import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { ContentChild } from './style';

const styles = ({ children }) => {
  const location = useLocation().pathname;
  const [action, setAction] = useState('');

  return (
    <>
      {
        location === '/login' ?
          (
            <>
              { children }
            </>
          ): (
            <>
              <Header action={setAction} />
              <Sidebar open={action} action={setAction} />
              <ContentChild>
                { children }
              </ContentChild>
            </>
          )
      }
    </>
  );
}

export default styles;