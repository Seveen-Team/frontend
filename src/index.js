import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GloblalStyles';
// import App from './routes/App';
import AgregarVacante from './components/AgregarVacante';

ReactDOM.render(
  <>
    <GlobalStyles />
    <AgregarVacante />
  </>,
  document.getElementById('app')
);
