import React, { useState } from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';
import { load_user, login } from '../../../store/actions/user';
import { useHistory } from 'react-router-dom';
// Alt vi vil hente fra redux sin state, tar vi inn her
// og husker å sende dem med i mapStateToProps
const Login = ({
  login,
  isAuthenticated,
  msg,
  status,
}: {
  login: Function;
  isAuthenticated?: boolean;
  msg: String, 
  status: Number,
  clearErrors: Function;
}) => {
  const [email, setEmail] = useState('');
  const history = useHistory();
  if (isAuthenticated) {
    history.push('/account');  
  }
  return (
    <div className='container'>
      <h2 className='center'>LOG IN</h2>
      <div className='form'>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            login(email);
          }}
        >
          <label>Email:   </label>
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
          <h5 className = 'errormsg'> {status? msg : ''}</h5> 
          <button className='button' type='submit'>
            {' '}
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  // returnerer et objekt
  return {
    // Vi vil bruke disse fra state
    email: state.user.email,
    isAuthenticated: state.user.isAuthenticated,
    status: state.errors.status,
    msg: state.errors.msg.msg
  };
};

// const mapDispatchToProps = {
//   getMovies,
// };
//                      (verdier fra state, funksjoner som gjør noe med state)
//
//                          connect(state, actions)(Komponent)
export default connect(mapStateToProps, { load_user: load_user, login })(Login);
