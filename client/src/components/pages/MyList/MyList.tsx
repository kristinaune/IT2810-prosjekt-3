import React from 'react';
import { connect } from 'react-redux';
import { StoreState, UserType } from '../../../types';
import MyListAuth from './MyListAuth';
import MyListUnAuth from './MyListUnAuth';
import './MyList.css';

const MyList = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
  user: UserType;
}) => {
  return (
    <div className='myListContainer'>
      <h4>My list</h4>
      {isAuthenticated ? <MyListAuth /> : <MyListUnAuth />}
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    isAuthenticated: state.user.authState.auth,
  };
};

export default connect(mapStateToProps, {})(MyList);
