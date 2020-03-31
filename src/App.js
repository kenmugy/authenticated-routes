import React, { useState } from 'react';
import {
  NavLink,
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const FakeAuth = {
  isAuthenticated: false,
  login(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  logout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const HomePage = () => (
  <h1 className='container center card-panel white-text orange lighten-1 z-depth-0'>
    HomePage
  </h1>
);

const LoginPage = ({ handleChange, handleSubmit }) => {
  return (
    <div className='container '>
      <h4 className='center'>LoginPage</h4>
      <form
        onSubmit={handleSubmit}
        className='card-panel z-depth-0 purple lighten-5'>
        <div className='input-field'>
          <input type='text' id='name' onChange={handleChange} />
          <label htmlFor='name'>Name</label>
        </div>
        <div className='input-field'>
          <button className='btn blue'>Login</button>
        </div>
      </form>
    </div>
  );
};

const AccountPage = () => (
  <h1 className='container card-panel orange'>AccountPage</h1>
);

const LoggedInLinks = ({ name }) => (
  <ul className='right'>
    <li>
      <NavLink to='/account'>
        <button className='btn btn-floating red'>{name}</button>
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/'
        onClick={() => {
          console.log(FakeAuth);
          FakeAuth.logout(() => <Redirect to='/' />);
        }}>
        Logout
      </NavLink>
    </li>
  </ul>
);
const LoggedOutLinks = () => (
  <ul className='right'>
    <li>
      <NavLink to='/login'>Login</NavLink>
    </li>
  </ul>
);

const NavBar = ({ name }) => (
  <nav className='grey darken-4'>
    <div className='container nav-wrapper'>
      <Link to='/' className='left brand-logo'>
        MyAPP
      </Link>
      {FakeAuth.isAuthenticated ? (
        <LoggedInLinks name={name} />
      ) : (
        <LoggedOutLinks />
      )}
    </div>
  </nav>
);

const App = () => {
  const [name, setName] = useState('');
  const handleChange = e => setName(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    FakeAuth.login(() => <Redirect to='/account' />);
    setName('');
    console.log(FakeAuth);
  };

  return (
    <Router>
      <NavBar name={name} />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/login'>
            <LoginPage
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path='/account'>
            <AccountPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
