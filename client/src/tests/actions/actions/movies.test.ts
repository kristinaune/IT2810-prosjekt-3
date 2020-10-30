import Axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getMovies } from '../../../store/actions/movies';
import { IMovie } from '../../../types';
import exampleMovies from '../../fixtures/movies';

const createMockStore = configureMockStore([thunk]);

describe('Load movies', () => {
  test('Test getMovies action creator', async (done) => {
    const action = getMovies(exampleMovies);

    expect(action).toEqual({
      type: 'LOAD_MOVIES',
      payload: exampleMovies,
    });

    const store = createMockStore({});

    const movies: IMovie[] = await Axios.get(
      'http://it2810-62.idi.ntnu.no:3000/api/movies/search/godfather/rating/1'
    ).then((res) => res.data);
    store.dispatch(getMovies(movies));
    console.log(store.getActions());

    expect(store.getActions()[0].payload.length).toEqual(2);

    done();
  });
});
