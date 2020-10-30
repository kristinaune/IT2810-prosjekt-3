import movieReducer from '../../store/reducers/movieReducer';
import exampleMovies from '../fixtures/movies';

test('Test default state', () => {
  const state = movieReducer(undefined, { type: '@@INIT', payload: [] });
  expect(state).toEqual({ movies: [] });
});

test('Test if movies are added to stemd', () => {
  const state = movieReducer(undefined, {
    type: 'LOAD_MOVIES',
    payload: exampleMovies,
  });
  expect(state).toEqual({ movies: exampleMovies, type: 'LOAD_MOVIES' });
});
