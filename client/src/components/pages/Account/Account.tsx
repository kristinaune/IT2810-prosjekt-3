import React from 'react';
import './Account.css';
import { connect } from 'react-redux';
import AccountUnAuth from './AccountUnAuth';
import AccountAuth from './AccountAuth';
import { render } from '@testing-library/react';

const Account = ({ isAuthenticated }: { isAuthenticated?: boolean }) => {
  console.log('isAuthenticated:' + isAuthenticated);
  return <div>{isAuthenticated ? <AccountAuth /> : <AccountUnAuth />}</div>;
};

const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.user.isAuthenticated };
};

export default connect(mapStateToProps, {})(Account);
