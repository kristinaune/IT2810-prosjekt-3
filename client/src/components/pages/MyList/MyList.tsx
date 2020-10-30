import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { StoreState, UserType } from '../../../types';
import MyListAuth from './MyListAuth';
import MyListUnAuth from './MyListUnAuth';
import './MyList.css';

/**
 * Displays movies in a user's "My List"
 */
const MyList = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
  user: UserType;
}): ReactElement => {
  return (
    <main className='myListContainer'>
      <h4>My list</h4>
      {isAuthenticated ? <MyListAuth /> : <MyListUnAuth />}
    </main>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    isAuthenticated: state.user.authState.auth,
  };
};

export default connect(mapStateToProps, {})(MyList);
