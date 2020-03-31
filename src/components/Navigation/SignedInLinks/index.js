import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../../Auth';

const SigneInLinks = () => {
  return (
    <ul className='right'>
      <li>
        <button className='btn btn-floating red'>{Auth.nome}</button>
      </li>
      <li>
        <NavLink to='/'>Logout</NavLink>
      </li>
    </ul>
  );
};

export default SigneInLinks;
