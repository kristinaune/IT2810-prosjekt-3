import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import AccountUnAuth from './AccountUnAuth';
import AccountAuth from './AccountAuth';
import { StoreState, IUser } from '../../../types';
import './Account.css';

/**
 * Renders AccountAuth if user is logged in, AccountUnAuth if not.
 */
const Account = ({
  user,
  isAuthenticated,
}: {
  user: IUser;
  isAuthenticated: boolean;
}): ReactElement => {
  return isAuthenticated ? <AccountAuth user={user} /> : <AccountUnAuth />;
};

const mapStateToProps = (state: StoreState) => {
  return {
    isAuthenticated: state.user.authState.auth,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Account);
