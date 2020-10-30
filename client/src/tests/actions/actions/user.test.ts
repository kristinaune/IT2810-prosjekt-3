import Axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  login,
  register,
  addMovie,
  removeMovie,
  startRemoveMovie,
} from '../../../store/actions/user';
import { IUser } from '../../../types';
import exampleMovies from '../../fixtures/movies';
import exampleUser from '../../fixtures/user';

const createMockStore = configureMockStore([thunk]);

// Beskrivelse av testen
describe('Register user', () => {
  test('Test register action creator', async (done) => {
    // Bruk eksempeldata fra fixtures til å hente brukere (bruker ikke hele databasen),
    // og ta dette som parameter i getmovies

    const action = register(exampleUser[0]);

    // Sjekk om resultatet fra getMovies er av typen load_movies, og at payloaden er det som blir sendt inn
    expect(action).toEqual({
      type: 'REGISTER_SUCCESS',
      user: exampleUser[0],
    });

    // Lag en redux-store
    const store = createMockStore({});

    done();
  });
});

// Beskrivelse av testen
describe('Login user', () => {
  test('Test login action creator', async (done) => {
    // Bruk eksempeldata fra fixtures til å hente filmer (bruker ikke hele databasen),
    // og ta dette som parameter i getmovies
    // const existingUser: IUser = await Axios.post(
    //   'http://it2810-62.idi.ntnu.no:3000/api/users/register/', {email: exampleUser[0].email, name: exampleUser[0].name}).then((res) => res.data);
    const action = login(exampleUser[0]);
    // Sjekk om resultatet fra getMovies er av typen load_movies, og at payloaden er det som blir sendt inn
    expect(action).toEqual({
      type: 'LOGIN_SUCCESS',
      user: exampleUser[0],
    });

    done();
  });
});
describe('Add movie to movielist', () => {
  test('Test addMovie action creator', async (done) => {
    // Bruk eksempeldata fra fixtures til å hente filmer (bruker ikke hele databasen),
    // og ta dette som parameter i getmovies
    // const existingUser: IUser = await Axios.post(
    //   'http://it2810-62.idi.ntnu.no:3000/api/users/register/', {email: exampleUser[0].email, name: exampleUser[0].name}).then((res) => res.data);
    const action = addMovie(exampleUser[0]);
    // Sjekk om resultatet fra getMovies er av typen load_movies, og at payloaden er det som blir sendt inn

    expect(action).toEqual({
      type: 'ADD_MOVIE_SUCCESS',
      user: exampleUser[0],
    });

    //expect(exampleUser[0].movieList).toEqual(list_before);
    done();
  });
});

describe('Remove movie from movielist', () => {
  test('Test removeMovie action creator', async (done) => {
    // Bruk eksempeldata fra fixtures til å hente filmer (bruker ikke hele databasen),
    // og ta dette som parameter i getmovies
    // const existingUser: IUser = await Axios.post(
    //   'http://it2810-62.idi.ntnu.no:3000/api/users/register/', {email: exampleUser[0].email, name: exampleUser[0].name}).then((res) => res.data);
    const action = removeMovie(exampleUser[0]);
    // Sjekk om resultatet fra getMovies er av typen load_movies, og at payloaden er det som blir sendt inn

    expect(action).toEqual({
      type: 'REMOVE_MOVIE_SUCCESS',
      user: exampleUser[0],
    });

    done();
  });
});
