import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GloblalStyles';
// import App from './routes/App';
import MasInfo from './components/MasInfo';

ReactDOM.render(
  <>
    <GlobalStyles />
    <MasInfo />
  </>,
  document.getElementById('app')
);
