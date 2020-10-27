import React, { useEffect, useState } from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';
import { register } from '../../../store/actions/user';
import { useHistory } from 'react-router-dom';
import { StoreState } from '../../../types';
//import './User.css';

const Register = ({
  isAuthenticated,
  register,
  registerError,
  errorMsg,
}: {
  isAuthenticated: boolean;
  register: Function;
  registerError?: boolean;
  errorMsg?: string;
}) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Redirect to "account" on succesful registration
  useEffect(() => {
    isAuthenticated && history.push('/account');
  }, [isAuthenticated, history]);

  // Empty arrowfunction inside useEffect to listen for error-messages
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [errorMsg]);

  return (
    <div className='authContainer'>
      <h4 className='center'>Register</h4>
      <div className='form'>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            register(name, email);
          }}
        >
          <label>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Write email here...'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Write name here...'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h5 className='errorMsg'>
            {
              // If there is an error-message of registration-type, display it.
              registerError ? errorMsg : ' '
            }
          </h5>
          <button className='button' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  console.log(state);

  return {
    isAuthenticated: state.user.authState.auth,
    // If there is an error, check if it was registering-related
    registerError: state.user.authState.type === 'REGISTER_ERROR',
    errorMsg: state.user.errorMsg,
  };
};

export default connect(mapStateToProps, { register })(Register);
