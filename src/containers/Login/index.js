import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Content, ContentForm, Image } from './styles';
import Variables from '../../styles/vars';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <ThemeProvider theme={Variables}>
      <Content>
        <LoginForm />
      </Content>
    </ThemeProvider>
  );
} 

export default Login;
