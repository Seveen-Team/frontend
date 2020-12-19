import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import Variables from '../../styles/vars';
import { Form, Image, Input, Button, Anchor, Container } from './styles';
import { loginUser } from '../../actions/loginAction';

const LoginForm = () => {
  const dispatch = useDispatch();
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
    dispatch(loginUser(form, '/'));
  }
  const Logo = "https://firebasestorage.googleapis.com/v0/b/platzi-master-21d21.appspot.com/o/Assets%2FlogoPM.png?alt=media&token=96438203-1626-42fb-aa18-f20ffc2abc3a";

  return (
    <ThemeProvider theme={Variables}>
      <Form onSubmit={handleLogin} autoComplete='off'>
        <Image src={Logo} />
        <Container>
          <Input
            placeholder='Usuario'
            type='text'
            name='username'
            onChange={handleChange}
            autoComplete='off' 
          />
          <Input
            placeholder='Contraseña'
            type='password'
            name='password'
            onChange={handleChange}
            autoComplete='off' 
          />
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
