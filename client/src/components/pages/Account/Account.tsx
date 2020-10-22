import React from 'react';
import './Account.css';
import { connect } from 'react-redux';
import AccountUnAuth from './AccountUnAuth';
import AccountAuth from './AccountAuth';
import { clearErrors } from '../../../store/actions/error';


const Account = ({
  isAuthenticated,
  clearErrors,
}: {
  isAuthenticated?: boolean;
  clearErrors: Function;
}) => {
  console.log('isAuthenticated:' + isAuthenticated);
  clearErrors();
  return (
    <div className='container'>
      {isAuthenticated ? <AccountAuth /> : <AccountUnAuth />}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.user.isAuthenticated };
};

export default connect(mapStateToProps, { clearErrors })(Account);
