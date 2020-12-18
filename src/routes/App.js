import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import TrelloCard from '../components/TrelloCard';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={TrelloCard} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
