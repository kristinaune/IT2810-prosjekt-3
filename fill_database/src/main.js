const mongoose = require('mongoose');
const axios = require('axios');
const schemas = require('./schema');
const filmer = require('./filmer');

mongoose.connect('mongodb://it2810-62.idi.ntnu.no/movies', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {});

const Movie = mongoose.model('Movie', schemas.movieSchema);

function movieToModel(movie) {
  let modelMovie = {
    title: movie.Title,
    imdbId: movie.imdbID,
    director: movie.Director.split(', '),
    rating: parseFloat(movie.imdbRating),
    runtime: movie.Runtime.split(' ')[0],
    year: movie.Year,
    poster: movie.Poster,
    genres: movie.Genre.split(', '),
    released: movie.Released,
    plot: movie.Plot,
    actors: movie.Actors.split(', '),
    language: movie.Language.split(', '),
    country: movie.Country.split(', '),
  };
  return new Movie({ ...modelMovie });
}
let i = 0;

filmer.movies.forEach((movie) => {
  axios({
    method: 'GET',
    url: 'http://www.omdbapi.com/?i=' + movie.id + '&apikey=9c2125a2',
    headers: {
      'content-type': 'application/json',
      useQueryString: true,
    },
  })
    .then((response) => {
      i += 1;
      const movie = movieToModel(response.data);
      movie.save();
      console.log(response.data.Response);
      console.log(i);
      setTimeout(() => {}, 500);
    })
    .catch((error) => {
      console.log(error);
    });
});
