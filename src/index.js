import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GloblalStyles';
import App from './routes/App';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>, 
  document.getElementById('app'));
