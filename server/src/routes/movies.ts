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
 * @params  Search string
 * @params  Sort attribute
 * @params  Sort direction
 * @access  Public
 */
router.get(
  '/search/:searchString/:attribute/:direction',
  (req: HttpRequest, res: HttpResponse) => {
    const { searchString, attribute, direction } = req.params;
    Movie.find({
      // Query for movies with...
      $or: [
        // Title matching search
        { title: { $regex: searchString, $options: 'i' } },
        // IMDBbvID matching search
        { imdbId: { $regex: searchString, $options: 'i' } },
        // Any director in director-array matching search
        {
          director: { $elemMatch: { $regex: searchString, $options: 'i' } },
        },
        // Any director in director-array matching search
        {
          actors: { $elemMatch: { $regex: searchString, $options: 'i' } },
        },
        // Any director in director-array matching search
        {
          genres: { $elemMatch: { $regex: searchString, $options: 'i' } },
        },
      ],
    })
      .sort([[attribute, direction]])
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
  }
);

export default router;
