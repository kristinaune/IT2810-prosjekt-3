import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/user';

const AccountAuth = ({
  name,
  email,
  logout,
}: {
  name: string;
  email: string;
  logout: Function;
}) => {
  return (
    <React.Fragment>
      <h1>Account</h1>
      <section className='userInfo'>
        <span id='nameInfo'>
          <b>Name:</b> {name}
        </span>
        <br />
        <span id='emailInfo'>
          <b>Email:</b> {email}
        </span>
      </section>
      <button
        className='button'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        Log out
      </button>
    </React.Fragment>
  );
};
const mapStateToProps = (state: any) => {
  return { name: state.user.name, email: state.user.email };
};

export default connect(mapStateToProps, { logout })(AccountAuth);
