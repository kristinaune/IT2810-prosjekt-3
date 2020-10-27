import * as actions from '../displayMovie';
import * as types from '../actionTypes';

describe('Set display movie', () => {
  it('has movies to display', () => {
    const movie =
      'The Shawshank Redemption'; /* skal det stå en film her? Tittel? ID? */
    const expectedMovie = {
      type: SET_DISPLAY_MOVIE,
      movie,
    };

    expect(actions.set_display_movie(movie)).toEqual(expectedMovie);
  });
});

describe('Close the modal', () => {
  /* Hva skal vi ha inni denne? */
});
