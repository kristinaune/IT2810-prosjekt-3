import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/user';

const AccountAuth = ({
  name,
  email,
  logout,
}: {
  name: String;
  email: String;
  logout: Function;
}) => {
  console.log('NAME:' + name);
  return (
    <div className='container'>
      <h4 className='center'>Account</h4>
      <b>
        Name: {name}
        <br /> Email: {email}
      </b>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        nesciunt accusamus, placeat quaerat quidem.{' '}
      </p>
      <button
        className='button'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        {' '}
        Log out
      </button>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return { name: state.user.user.user.name, email: state.user.user.user.email };
  //Hvorfor er det så sykt mange "ledd" ned til navn? (user.user.user)
};

export default connect(mapStateToProps, { logout })(AccountAuth);
