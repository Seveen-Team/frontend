import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/GloblalStyles';
<<<<<<< HEAD
// import App from './routes/App';
import MasInfo from './components/MasInfo';
=======
import App from './routes/App';
import Store from './store/index';
>>>>>>> fd557ea67ff1a27bf86c0f1e8625150882c20558

ReactDOM.render(
  <Provider store={Store}>
    <GlobalStyles />
<<<<<<< HEAD
    <MasInfo />
  </>,
=======
    <App />
  </Provider>,
>>>>>>> fd557ea67ff1a27bf86c0f1e8625150882c20558
  document.getElementById('app')
);
