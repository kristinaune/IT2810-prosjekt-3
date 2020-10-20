import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className='NavbarItem'>
        {/* Endre tittel  */}
        <h1 className='navbar-logo1'> Gløshaugen Movie DB</h1>
        <h1 className='navbar-logo2'> GMDb</h1>
        <div className='menu-icon' onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <NavLink to='/search' className='nav-links'>
              {' '}
              Search{' '}
            </NavLink>
          </li>
          <li>
            <NavLink to='/allmovies' className='nav-links'>
              {' '}
              All movies
            </NavLink>
          </li>
          <li>
            <NavLink to='/mylist' className='nav-links'>
              {' '}
              My movie list
            </NavLink>
          </li>
          <li>
            <NavLink to='/account' className='nav-links'>
              {' '}
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
