import React, { useState } from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';
import { load_user, login } from '../../../store/actions/user';
import { useHistory } from 'react-router-dom';
//import './Login.css';
// Alt vi vil hente fra redux sin state, tar vi inn her
// og husker å sende dem med i mapStateToProps
const Login = ({ login }: { login: Function }) => {
  const [email, setEmail] = useState('');
  const history = useHistory();
  return (
    <form
      className='authContainer'
      onSubmit={(e: any) => {
        e.preventDefault();
        login(email);
        history.push('/account');
      }}
    >
      <h4>Log in</h4>
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
      <button className='accountButton' type='submit'>
        {' '}
        Log in
      </button>
    </form>
  );
};

const mapStateToProps = (state: any) => {
  // returnerer et objekt
  return {
    // Vi vil bruke disse fra state
    email: state.user.email,
  };
};

// const mapDispatchToProps = {
//   getMovies,
// };
//                      (verdier fra state, funksjoner som gjør noe med state)
//
//                          connect(state, actions)(Komponent)
export default connect(mapStateToProps, { load_user: load_user, login })(Login);
