import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import TrelloCard from '../components/TrelloCard';
import Vacancies from '../pages/Vacances';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={TrelloCard} />
          <Route exact path='/vacancies' component={Vacancies} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
