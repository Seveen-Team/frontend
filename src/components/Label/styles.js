import styled from 'styled-components';

export const Label = styled.section`
  display: inline-block;
  height: auto;
  background-color: ${props => props.color};
  color: ${props => props.letter};
  padding: 2.5px 10px;
  border-radius: 30px;
  margin: 2.5px 2.5px;
`;

export const Text = styled.p`
  margin: 0 auto;
`;