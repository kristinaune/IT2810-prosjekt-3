import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='title'>
        Gløshaugen MovieDB
        <ul className='right'>
          <li>
            {' '}
            <NavLink to='/search'> Seach </NavLink>
          </li>
          <li>
            {' '}
            <NavLink to='/allmovies'> All movies</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to='/mylist'> My movie list</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to='/account'> Account</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
