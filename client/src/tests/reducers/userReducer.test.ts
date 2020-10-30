import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../../store/actions/actionTypes';
import userReducer from '../../store/reducers/userReducer';
import exampleMovies from '../fixtures/movies';
import exampleUser from '../fixtures/user';
test('Test default state', () => {
  const state = userReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    authState: { auth: false, type: LOGOUT_SUCCESS },
  });
});

test('Test user login', () => {
  const state = userReducer(undefined, {
    type: 'LOGIN_SUCCESS',
    user: exampleUser[0],
    errorMsg: '',
  });
  expect(state).toEqual({
    movieList: exampleUser[0].movieList,
    name: exampleUser[0].name,
    email: exampleUser[0].email,
    authState: { auth: true, type: LOGIN_SUCCESS },
  });
});
