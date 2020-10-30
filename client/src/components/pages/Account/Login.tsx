import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../../store/actions/user';
import { useHistory } from 'react-router-dom';
import { StoreState } from '../../../types';

/**
 * Login page.
 */
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
}): ReactElement => {
  const [email, setEmail] = useState('');
  const history = useHistory();

  // Redirect to "account" on succesful startLogin
  useEffect(() => {
    isAuthenticated && history.push('/account');
  }, [isAuthenticated, history]);

  return (
    <main className='authContainer'>
      <h2 className='center'>LOG IN</h2>
      <div className='form'>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            startLogin(email);
          }}
        >
          <label>Email: </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='example@email.com'
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
          <button
            className='accountButton'
            type='button'
            onClick={() => history.push('/account')}
          >
            <span className='material-icons'>west</span>
            Back
          </button>
          <button className='accountButton' type='submit'>
            Log in
          </button>
        </form>
      </div>
    </main>
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
