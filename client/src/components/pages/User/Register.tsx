import React from 'react';
// Importer Connect, "connecter" komponenten til redux
import { connect } from 'react-redux';
import { loadUser, login } from '../../../store/actions/user';
import './User.css';
// Alt vi vil hente fra redux sin state, tar vi inn her
// og husker å sende dem med i mapStateToProps
const Register = ({ user }: { user: Object | null }) => {
  return (
    <div className='container'>
      <h4 className='center'>Register</h4>
      <div className='form'>
        <form>
          <label>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Write email here...'
          />
          <button className='button' type='submit'>
            {' '}
            Submit
          </button>
        </form>
      </div>
      <div className='logincontainer'>
        <div className='form'>
          <form>
            <p></p>
            <label>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Write name here...'
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  // returnerer et objekt
  return {
    // Vi vil bruke disse fra state
    user: state.user,
  };
};

// const mapDispatchToProps = {
//   getMovies,
// };
//                      (verdier fra state, funksjoner som gjør noe med state)
//
//                          connect(state, actions)(Komponent)
export default connect(mapStateToProps, { loadUser })(Register);
