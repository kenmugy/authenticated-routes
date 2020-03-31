import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Auth from './components/Auth';

const App = () => {
  const [name, setName] = useState('');
  return (
    <Router>
      <Navigation />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/login'>
            <LoginPage name={name} setName={setName} auth={Auth} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
