import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import TrelloCard from '../components/TrelloCard';
import Login from '../containers/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={TrelloCard} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
