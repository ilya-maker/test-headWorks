import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Styles
import './App.scss';

// Components
import Header from './Header';

import UserList from './UserList';
import RegistrationForm from './RegistrationForm';
import AboutMe from './AboutMe';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route path="/userList">
              <UserList/>
            </Route>
            <Route path="/registration">
              <RegistrationForm />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Redirect to="/userList" />
        </Switch>
    </div>
  );
}

export default App;
