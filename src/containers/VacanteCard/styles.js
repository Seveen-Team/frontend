import styled from 'styled-components';

export const WrapperCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  height: 350px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

export const CardHeader = styled.section`
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.hover};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-family: 'Bebas Neue', cursive;
  margin: 10px;
`;

export const CardLabels = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;

export const CardBody = styled.section`
  margin: 10px;
  max-height: 140px;
  width: calc(100% - 20px);
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Strong = styled.strong`
  letter-spacing: 0.5px;
`;

export const Pa = styled.p`
  text-align: left;
  margin-bottom: 5px;
`;

export const CardFooter = styled.section`
  display: flex;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: center;
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