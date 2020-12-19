import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/GloblalStyles';
import App from './routes/App';
import Store from './store/index';

ReactDOM.render(
  <Provider store={Store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('app')
);
