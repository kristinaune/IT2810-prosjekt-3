import React from 'react';
import { connect } from 'react-redux';

const Account = () => {
  return <div className='container'>Not Authenticated</div>;
};
/*
const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.user.isAuthenticated };
};*/

export default connect(null, {})(Account);
