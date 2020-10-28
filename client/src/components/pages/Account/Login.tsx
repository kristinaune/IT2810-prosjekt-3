import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../../store/actions/user';
import { useHistory } from 'react-router-dom';
import { StoreState } from '../../../types';

const Login = ({
  startLogin,
  isAuthenticated,
  startLoginError,
  errorMsg,
}: {
  startLogin: (email: string) => void;
  isAuthenticated?: boolean;
  startLoginError?: boolean;
  errorMsg?: string;
}) => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  // Redirect to "account" on succesful startLogin
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
            startLogin(email);
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
              // If there is an error-message of startLogin-type, display it.
              startLoginError ? errorMsg : ' '
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
    // If there is an error, check if it was startRegistering-related
    startLoginError: state.user.authState.type === 'LOGIN_ERROR',
    errorMsg: state.user.errorMsg,
  };
};

export default connect(mapStateToProps, { startLogin })(Login);
