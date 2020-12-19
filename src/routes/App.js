import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../containers/Layout';
import TrelloCard from '../components/TrelloCard';
import Vacancies from '../pages/Vacances';
import Login from '../containers/Login';

const isLogged = localStorage.getItem('token');

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/login'>
            {isLogged ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route exact path='/'>
            {isLogged ? <TrelloCard /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/vacancies'>
            {isLogged ? <Vacancies /> : <Redirect to='/login' />}
          </Route>
          <Route path='*'>
            {isLogged ? <Redirect to='/' /> : <Redirect to='/login' />}
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
