import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth';
import SigneInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navigation = () => {
  return (
    <nav className='grey darken-3'>
      <div className='container nav-wrapper'>
        <NavLink className='brand-logo left' to='/'>
          MyApp
        </NavLink>
        {Auth.isAuthenticated ? <SigneInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

export default Navigation;
