import { css, keyframes } from 'styled-components';



export const intoFrames = keyframes`
  from {
    /* width: 0; */
    background-color: white;
    margin-left: -100%;
    opacity: 0;
    visibility: hidden;
    
  }
  to{
    /* width: 100%; */
    background-color: white;
    margin-left: 0;
    opacity: 1;
    visibility: visible;
  }
`;

export const outFrames = keyframes`
  from {
    background-color: white;
    margin-left: 0;
    opacity: 1;
    visibility: visible;
  }
  to {
    background-color: white;
    margin-left: -100%;
    opacity: 0;
    visibility: hidden;
  }
`;

export const intoScreen = ({ time = '0.5s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${intoFrames} ${type} forwards;
`;

export const outScreen = ({ time = '0.5s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${outFrames} ${type} forwards;
`;