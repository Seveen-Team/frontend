import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  background-color: ${props => props.theme.secundary};
  width: 30%;
  height: 80%;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
  @media screen and (min-width: 768.1px) and (max-width: 1024px){
    width: 40%;
    height: 80%;
  }
`;

export const Image = styled.img`
  width: 250px;
  object-fit: cover;
`;

export const Input = styled.input`
  width: 250px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid white;
  background-color: ${props => props.theme.hover};
  color: white;
  padding: 5px 10px;

  &::placeholder {
    color: rgba(255,255,255,0.3);
  }
`;

export const Anchor = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover{
    color: ${props => props.theme.primary};
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  border: 1px solid white;
  outline: none;
  color: ${props => props.theme.secunday};
  font-weight: 700;
  font-size: 18px;
  padding: 7.5px 15px;
  cursor: pointer;
`;

export const Container = styled.section`
  width: 100%;
  height: 110px;
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
