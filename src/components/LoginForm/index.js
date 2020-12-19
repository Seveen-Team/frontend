import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Variables from '../../styles/vars';
import { Form, Image, Input, Button, Anchor, Container } from './styles';
import logo from '../../assets/logoPM.png';

const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(form);
  }

  return (
    <ThemeProvider theme={Variables}>
      <Form onSubmit={handleLogin}>
        <Image src={logo} />
        <Container>
          <Input placeholder='Usuario' type='text' name='username' onChange={handleChange} />
          <Input placeholder='Contraseña' type='password' name='password' onChange={handleChange} />
        </Container>
        <Container>
          <Anchor to='/'>¿Olvidaste tu contraseña?</Anchor>
          <Button typ>Iniciar sesión</Button>
        </Container>
      </Form>    
    </ThemeProvider>
  );
}

export default LoginForm;
