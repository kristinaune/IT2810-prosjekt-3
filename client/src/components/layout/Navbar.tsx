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
        <NavLink to='/' className='navbar-logo1'>
          Gløshaugen Movie DB
        </NavLink>
        <NavLink to='/' className='navbar-logo2'>
          GMDb
        </NavLink>
        {/* <h1 className='navbar-logo1'> Gløshaugen Movie DB</h1>
        <h1 className='navbar-logo2'> GMDb</h1> */}
        <div className='menu-icon' onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li onClick={this.handleClick}>
            <NavLink to='/search' className='nav-links'>
              Search
            </NavLink>
          </li>
          <li onClick={this.handleClick}>
            <NavLink to='/allmovies' className='nav-links'>
              All movies
            </NavLink>
          </li>
          <li onClick={this.handleClick}>
            <NavLink to='/mylist' className='nav-links'>
              My movie list
            </NavLink>
          </li>
          <li onClick={this.handleClick}>
            <NavLink to='/account' className='nav-links'>
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
