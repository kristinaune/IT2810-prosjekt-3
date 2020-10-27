import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/user';
import { UserType } from '../../../types';

const AccountAuth = ({
  user,
  logout,
}: {
  user: UserType;
  logout: Function;
}) => {
  return (
    <div className='autContainer'>
      <h2 className='center'>ACCOUNT</h2>
      Logged in as {user.name} with email: {user.email}.<p></p>
      <br></br>
      <div className='textfield'>
        This is a website for searching among the 250 best rated movies, go to
        'Search' in the navbar. You can sort your search by year produced,
        rating desc/asc and runtime. Go to 'All movies' for an overview of all
        the movies, and the oppertunity to filter on genre. Add your favorites
        to 'My movie list', and display them in this tab.
      </div>
      <p></p>
      <button
        className='button'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        {' '}
        Log out
      </button>
    </div>
  );
};

export default connect(null, { logout })(AccountAuth);
