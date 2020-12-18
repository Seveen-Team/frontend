import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Prueba from '../containers/componentPrueba';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Prueba} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
