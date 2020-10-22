import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/user';

const AccountAuth = ({
  name,
  email,
  logout,
}: {
  name: String;
  email: String;
  logout: Function;
}) => {
  return (
    <div className='container'>
      <h2 className='center'>ACCOUNT</h2>
      Logged in as {name} with email: {email}.<p></p>
      <br></br>
      <div className='textfield'>
        This is a website for searching among the 250 best rated movies, go to
        'Search' in the navbar. You can sort your search by year produced,
        rating desc/asc and runtime. Go to 'All movies' for an overview of all
        the movies, and the oppertunity to filter on genre. Add your favorites
        to 'My movie list', and display them in this tab.
      </div>
      <p></p>
      <button
        className='button'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        {' '}
        Log out
      </button>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return { name: state.user.user.user.name, email: state.user.user.user.email };
  //Hvorfor er det så sykt mange "ledd" ned til navn? (user.user.user)
};

export default connect(mapStateToProps, { logout })(AccountAuth);
