import React from 'react';
import './Account.css';
import { connect } from 'react-redux';
import AccountUnAuth from './AccountUnAuth';
import AccountAuth from './AccountAuth';

const Account = ({ isAuthenticated }: { isAuthenticated?: boolean }) => {
  console.log('isAuthenticated:' + isAuthenticated);
  return (
    <div className='authContainer'>
      {isAuthenticated ? <AccountAuth /> : <AccountUnAuth />}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.user.isAuthenticated };
};

export default connect(mapStateToProps, {})(Account);
