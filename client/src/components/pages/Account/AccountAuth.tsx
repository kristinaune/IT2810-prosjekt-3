import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../../../store/actions/user';
import { UserType } from '../../../types';

const AccountAuth = ({
  user,
  startLogout,
}: {
  user: UserType;
  startLogout: () => void;
}) => {
  return (
    <main className='authContainer'>
      <h2 className='center'>ACCOUNT</h2>
      <p className='textfield' id='userInfo'>
        Logged in as {user.name} with email: {user.email}.
      </p>
      <br></br>
      <p className='textfield'>
        This is a website for searching among the 250 best rated movies, go to
        'Search' in the navbar. You can sort your search by year produced,
        rating desc/asc and runtime. Go to 'All movies' for an overview of all
        the movies, and the oppertunity to filter on genre. Add your favorites
        to 'My movie list', and display them in this tab.
      </p>
      <button
        className='accountButton'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          startLogout();
        }}
      >
        {' '}
        Log out
      </button>
    </main>
  );
};

export default connect(null, { startLogout })(AccountAuth);
