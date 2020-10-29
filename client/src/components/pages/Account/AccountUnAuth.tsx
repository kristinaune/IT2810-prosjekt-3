import React from 'react';
import './Account.css';
import { useHistory } from 'react-router-dom';

const AccountUnAuth = () => {
  const history = useHistory();
  return (
    <main className='authContainer'>
      <h2 className='center'> ACCOUNT </h2>
      <p className='textfield'>
        This is a website for searching among the 250 best rated movies, go to
        'Search' in the navbar. You can sort your search by year produced,
        rating desc/asc and runtime. Go to 'All movies' for an overview of all
        the movies, and the oppertunity to filter on genre. Log in and add your
        favorites to 'My movie list', and display them in this tab.
      </p>
      <button
        id='toLogin'
        className='accountButton'
        type='button'
        onClick={() => history.push('/login')}
      >
        Log in
      </button>
      <button
        id='toRegister'
        className='accountButton'
        type='button'
        onClick={() => history.push('/register')}
      >
        Register
      </button>
    </main>
  );
};

export default AccountUnAuth;
