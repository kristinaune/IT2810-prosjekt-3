import React from 'react';
import './Account.css';
import { connect } from 'react-redux';
import AccountUnAuth from './AccountUnAuth';
import AccountAuth from './AccountAuth';
import { StoreState, UserType } from '../../../types';

const Account = ({
  user,
  isAuthenticated,
}: {
  user: UserType;
  isAuthenticated: boolean;
}) => {
  return (
    <main className='authContainer'>
      {isAuthenticated ? <AccountAuth user={user} /> : <AccountUnAuth />}
    </main>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    isAuthenticated: state.user.authState.auth,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Account);
