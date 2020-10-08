import React, { useState } from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';
import { loadUser, login } from '../../../store/actions/user';
//import './Login.css';
// Alt vi vil hente fra redux sin state, tar vi inn her
// og husker å sende dem med i mapStateToProps
const Login = ({ user }: { user: Object | null }) => {
  let [email, setEmail] = useState('');
  return (
    <div className='container'>
      <h4 className='center'>Log in</h4>
      <div className='form'>
        <form>
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
          <button
            className='button'
            type='submit'
            onClick={(e) => {
              login(email);
            }}
          >
            {' '}
            Submit
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
    user: state.user,
  };
};

// const mapDispatchToProps = {
//   getMovies,
// };
//                      (verdier fra state, funksjoner som gjør noe med state)
//
//                          connect(state, actions)(Komponent)
export default connect(mapStateToProps, { loadUser, login })(Login);
