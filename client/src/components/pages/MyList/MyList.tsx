import React from 'react';
import { connect } from 'react-redux';
import MyListAuth from './MyListAuth';
import MyListUnAuth from './MyListUnAuth';

const MyList = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <div className='container'>
      <h4 className='center'>My list</h4>
      {isAuthenticated ? <MyListAuth /> : <MyListUnAuth />}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.user.isAuthenticated };
};

export default connect(mapStateToProps, {})(MyList);
//export default connect(mapStateToProps, { searchMovieTitle })(MovieList);
