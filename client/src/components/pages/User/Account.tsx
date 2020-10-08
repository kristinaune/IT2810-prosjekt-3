import React from 'react';
import Navbar from '../../layout/Navbar';
import './Account.css';
import { useHistory } from 'react-router-dom';

const Account = () => {
  const history = useHistory();
  return (
    <div className='container'>
      <h4 className='center'>Account</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        nesciunt accusamus, placeat quaerat quidem corporis voluptatum
        repudiandae possimus accusantium officia quibusdam beatae exercitationem
        mollitia tenetur velit non a aut quae.{' '}
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
    </div>
  );
};

export default Account;
