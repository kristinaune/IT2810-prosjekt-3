import React from 'react';
import { connect } from 'react-redux';
import MyListAuth from './MyListAuth';
import MyListUnAuth from './MyListUnAuth';
import './MyList.css';

const MyList = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <div className='myListContainer'>
      <h4>My list</h4>
      {isAuthenticated ? <MyListAuth /> : <MyListUnAuth />}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.user.authState[0] };
};

export default connect(mapStateToProps, {})(MyList);
