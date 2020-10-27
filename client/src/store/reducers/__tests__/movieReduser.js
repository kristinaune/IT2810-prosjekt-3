import * as types from '../../actions/actionTypes';
import movieReducer from '../movieReducer';

describe('Movie Reducer', () => {
  it('Should return default state', () => {
    const newState = movieReducer(false, {});
    expect(newState).toEqual([false]);
  });

  it('Should return new state if recieving type adn state is true', () => {
    const movies = [{ title: 'test 1' }, { title: 'test 2' }];
    const newState = movieReducer(true, {
      type: types.LOAD_MOVIES,
      payload: movies,
    });
    expect(newState).toEqual(movies);
  });

  it('Should return error if reciecing type and state is false', () => {
    const movies = [{ title: 'test 1' }, { title: 'test 2' }];
    const newState = movieReducer(false, {
      type: types.LOAD_MOVIES_ERROR,
      payload: movies,
    });
    expect(newState).toEqual([false]);
  });
});
