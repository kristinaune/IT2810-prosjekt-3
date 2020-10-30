import React, { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar at top of the page.
 */
const Navbar = (): ReactElement => {
  // Display menu on smaller screens
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  return (
    <nav className='navbar'>
      <NavLink to='/' className='navbar-logo-wide'>
        Gløshaugen Movie DB
      </NavLink>
      <NavLink to='/' className='navbar-logo-narrow'>
        GMDb
      </NavLink>
      <div className='menu-icon' onClick={() => setDisplayMenu((d) => !d)}>
        <i className={displayMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={displayMenu ? 'nav-menu active' : 'nav-menu'}>
        <li onClick={() => setDisplayMenu(false)}>
          <NavLink to='/search' className='nav-links'>
            Search
          </NavLink>
        </li>
        <li onClick={() => setDisplayMenu(false)}>
          <NavLink to='/allmovies' className='nav-links'>
            All movies
          </NavLink>
        </li>
        <li onClick={() => setDisplayMenu(false)}>
          <NavLink to='/mylist' className='nav-links'>
            My movie list
          </NavLink>
        </li>
        <li onClick={() => setDisplayMenu(false)}>
          <NavLink to='/account' className='nav-links'>
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
