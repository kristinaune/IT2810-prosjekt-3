import React, { ReactElement, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startRegister } from '../../../store/actions/user';
import { useHistory } from 'react-router-dom';
import { StoreState } from '../../../types';

/**
 * Registration page.
 */
const Register = ({
  isAuthenticated,
  startRegister,
  startRegisterError,
  errorMsg,
}: {
  isAuthenticated: boolean;
  startRegister: (email: string, name: string) => void;
  startRegisterError?: boolean;
  errorMsg?: string;
}): ReactElement => {
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
    <main className='authContainer'>
      <h2 className='center'>REGISTER</h2>
      <div className='form'>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            startRegister(name, email);
          }}
        >
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='John Doe'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor='email'>Email: </label>
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
              // If there is an error-message of registration-type, display it.
              startRegisterError ? errorMsg : ' '
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
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

const mapStateToProps = (state: StoreState) => {
  console.log(state);

  return {
    isAuthenticated: state.user.authState.auth,
    // If there is an error, check if it was startRegistering-related
    startRegisterError: state.user.authState.type === 'REGISTER_ERROR',
    errorMsg: state.user.errorMsg,
  };
};

export default connect(mapStateToProps, { startRegister })(Register);
