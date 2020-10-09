import React, { useState } from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';
import { loadUser, login, register } from '../../../store/actions/user';
import { useHistory } from 'react-router-dom';
//import './User.css';
// Alt vi vil hente fra redux sin state, tar vi inn her
// og husker å sende dem med i mapStateToProps
const Register = ({ register }: { register: Function }) => {
  const history = useHistory();
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  return (
    <div className='container'>
      <h4 className='center'>Register</h4>
      <div className='form'>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            register(name, email);
            history.push('/account');
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
              console.log(e.target.value);
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
          <button className='button' type='submit'>
            {' '}
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  // returnerer et objekt
  return {
    name: state.user.name,
    email: state.user.email,
    // Vi vil bruke disse fra state
  };
};

// const mapDispatchToProps = {
//   getMovies,
// };
//                      (verdier fra state, funksjoner som gjør noe med state)
//
//                          connect(state, actions)(Komponent)
export default connect(mapStateToProps, { loadUser, register })(Register);
