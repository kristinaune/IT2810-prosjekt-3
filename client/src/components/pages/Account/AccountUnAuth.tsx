import React from 'react';
import './Account.css';
import { useHistory } from 'react-router-dom';

const AccountUnAuth = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <h4>Account</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        nesciunt accusamus, placeat quaerat quidem.{' '}
      </p>
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
    </React.Fragment>
  );
};

export default AccountUnAuth;
