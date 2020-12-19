import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import TrelloCard from '../components/TrelloCard';
<<<<<<< HEAD
import Vacancies from '../pages/Vacances';
=======
import Login from '../containers/Login';
>>>>>>> 4b6721d58470b38a6f58a2b54f7c507b6efe8b45

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={TrelloCard} />
<<<<<<< HEAD
          <Route exact path='/vacancies' component={Vacancies} />
=======
          <Route exact path='/login' component={Login} />
>>>>>>> 4b6721d58470b38a6f58a2b54f7c507b6efe8b45
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
