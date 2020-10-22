import { HttpRequest, HttpResponse, MovieType, MovieDoc } from '../types';
import express from 'express';
import Movie from '../models/Movie';

const router = express.Router();

/**
 * @route   GET api/movies
 * @desc    Gets all movies in the database
 * @access  Public
 */
router.get('/', (req: HttpRequest, res: HttpResponse) => {
  Movie.find()
    .sort({ rating: -1 })
    .then((movies: Array<MovieType>) => res.json(movies));
});

/**
 * @route   GET api/movies/:imdbId
 * @desc    Gets a movie by it's IMDb-ID
 * @access  Public
 */
router.get('/getMovie/:imdbId', (req: HttpRequest, res: HttpResponse) => {
  console.log(req.params.imdbId);

  Movie.findOne({ imdbId: req.params.imdbId })
    .then((movie: MovieDoc | null) => res.json(movie))
    .catch((error: string) => {
      console.log(
        'Error on GET movies/:imdbId, using id' +
          req.params.id +
          '  :  ' +
          error
      );
      res.status(404).json({ success: false });
    });
});

/**
 * @route   GET api/movies/search
 * @desc    Searches for movies matching a search string
 * @params  Search
 * @access  Public
 */
router.get('/search', (req: HttpRequest, res: HttpResponse) => {
  const { search } = req.body;

  Movie.find({
    // Query for movies with...
    $or: [
      // Title matching search
      { title: { $regex: search, $options: 'i' } },
      // IMDBbvID matching search
      { imdbId: { $regex: search, $options: 'i' } },
      // Any director in director-array matching search
      {
        director: { $elemMatch: { $regex: search, $options: 'i' } },
      },
      // Any director in director-array matching search
      {
        actors: { $elemMatch: { $regex: search, $options: 'i' } },
      },
      // Any director in director-array matching search
      {
        genres: { $elemMatch: { $regex: search, $options: 'i' } },
      },
    ],
  })
    // Return array that matches search
    .then((movies: MovieDoc[] | null) => res.json(movies))
    .catch((error: string) => {
      console.log(
        'Error on GET movies/:imdbId, using id' +
          req.params.id +
          '  :  ' +
          error
      );
      res.status(404).json({ success: false });
    });
});

export default router;
