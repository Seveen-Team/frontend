import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { TextField } from '@material-ui/core'

export const Modal = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 110;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s ease-in-out;
`

export const Content = styled.section`
  width: 60%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  transition: 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 578px) {
    width: 95vw;
    height: auto;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.primary};
  border: none;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  outline: none;
  @media (max-width: 575.98px) {
    top: 60px;
    right: 10px;
  }
`

export const Icon = styled(AiOutlineClose)`
  font-size: 24px;
`

export const CardHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const CardBody = styled.section`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 70% 30%;
  @media screen and (max-width: 578px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const CardFooter = styled.section`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: 'Bebas Neue', cursive;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-family: 'Bebas Neue', cursive;
  padding: 5px;
`;

export const RightSection = styled.section`
  height: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CardLabels = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;

export const Strong = styled.strong`
  letter-spacing: 0.5px;
`;

export const Pa = styled.p`
  text-align: left;
  margin-bottom: 5px;
  padding: 5px;
  @media screen and (max-width: 578px) {
    text-align: justify;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secundary};
  border: 1px solid ${props => props.theme.secundary};
  padding: 5px 15px;
  font-size: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: green;
    color: white;
    border: 1px solid white;
    transition: 0.3s ease-in-out;
  }
`;