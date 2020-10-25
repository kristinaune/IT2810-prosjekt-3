import React, { useState } from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';
import { load_user, register } from '../../../store/actions/user';
import { useHistory } from 'react-router-dom';
//import './User.css';

const Register = ({ register }: { register: Function }) => {
  const history = useHistory();
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  return (
    <React.Fragment>
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
            Register
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { load_user, register })(Register);
