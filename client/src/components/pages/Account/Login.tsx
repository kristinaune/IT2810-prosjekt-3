import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../store/actions/user';
import { useHistory } from 'react-router-dom';
import { StoreState } from '../../../types';

const Login = ({
  login,
  isAuthenticated,
  loginError,
  errorMsg,
}: {
  login: Function;
  isAuthenticated?: boolean;
  loginError?: boolean;
  errorMsg?: string;
}) => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  // Redirect to "account" on succesful login
  useEffect(() => {
    isAuthenticated && history.push('/account');
  }, [isAuthenticated, history]);

  return (
    <div className='authContainer'>
      <h2 className='center'>LOG IN</h2>
      <div className='form'>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            login(email);
          }}
        >
          <label>Email: </label>
          <p></p>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Write email here...'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5 className='errorMsg'>
            {
              // If there is an error-message of login-type, display it.
              loginError ? errorMsg : ' '
            }
          </h5>
          <button className='button' type='submit'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    isAuthenticated: state.user.authState.auth,
    // If there is an error, check if it was registering-related
    loginError: state.user.authState.type === 'LOGIN_ERROR',
    errorMsg: state.user.errorMsg,
  };
};

export default connect(mapStateToProps, { login })(Login);
