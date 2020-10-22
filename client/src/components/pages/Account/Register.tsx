import React, { useState } from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';
import { load_user, register } from '../../../store/actions/user';
import {clearErrors} from '../../../store/actions/error';
import { useHistory } from 'react-router-dom';
//import './User.css';
// Alt vi vil hente fra redux sin state, tar vi inn her
// og husker å sende dem med i mapStateToProps
const Register = ({
  register,
  isAuthenticated,
  msg,
  status,
  clearErrors,
}: {
  register: Function;
  isAuthenticated: boolean;
  msg: String;
  status: Number;
  clearErrors: Function;
}) => {
  const history = useHistory();
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  if (isAuthenticated) {
    clearErrors();
    history.push('/account');
  }
  console.log(status)
  return (
    <div className='container'>
      <h2 className='center'>REGISTER</h2>
      <div className='form'>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            register(name, email);
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
          <p></p>
          <label>Name: </label>
          <p></p>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Write name here...'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h5 className = 'errormsg'> {status? msg : ''}</h5> 
          <button className='button' type='submit'>
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
    name: state.name,
    email: state.email,
    isAuthenticated: state.user.isAuthenticated,
    status: state.errors.status,
    msg: state.errors.msg.msg
    // Vi vil bruke disse fra state
  };
};

// const mapDispatchToProps = {
//   getMovies,
// };tex
//                      (verdier fra state, funksjoner som gjør noe med state)
//
//                          connect(state, actions)(Komponent)
export default connect(mapStateToProps, { load_user, register, clearErrors })(Register);
