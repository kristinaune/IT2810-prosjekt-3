import React from 'react';
import './Account.css';
import { useHistory } from 'react-router-dom';

const AccountUnAuth = () => {
  const history = useHistory();
  return (
    <div className='container'>
      <h2 className='center'> ACCOUNT </h2>
      <div className='textfield'>
        This is a website for searching among the 250 best rated movies, go to
        'Search' in the navbar. You can sort your search by year produced,
        rating desc/asc and runtime. Go to 'All movies' for an overview of all
        the movies, and the oppertunity to filter on genre. Log in and add your
        favorites to 'My movie list', and display them in this tab.
      </div>
      <p></p>
      <button
        className='button'
        type='submit'
        onClick={() => history.push('/login')}
      >
        {' '}
        Log in
      </button>
      <button
        className='button'
        type='submit'
        onClick={() => history.push('/register')}
      >
        {' '}
        Register
      </button>
    </div>
  );
};

export default AccountUnAuth;
