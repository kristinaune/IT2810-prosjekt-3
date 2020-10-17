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
        <h1 className='navbar-logo'> Gløshaugen Movie DB</h1>
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

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <div className='title'>
//         Gløshaugen MovieDB
//         <ul className='right'>
//           <li>
//             <NavLink to='/search'> Search </NavLink>
//           </li>
//           <li>
//             <NavLink to='/allmovies'> All movies</NavLink>
//           </li>
//           <li>
//             <NavLink to='/mylist'> My movie list</NavLink>
//           </li>
//           <li>
//             <NavLink to='/account'> Account</NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

export default Navbar;
