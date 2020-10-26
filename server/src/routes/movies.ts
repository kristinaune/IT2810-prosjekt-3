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
    // Extract params from URI
    const { searchString, attribute, direction } = req.params;
    Movie.find({
      // Query for movies with...
      $or: [
        // Title matching search
        { title: { $regex: searchString, $options: 'i' } },
        // IMDBbID _exactly_ matching search (no regex)
        { imdbId: searchString },
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

/**
 * @route   GET api/movies/filter/:genreArray/:fromYear/:toYear/:ratedFrom/:ratedTo
 * @desc    Filters movie by genres, year and rating.
 * @params  Array of genres
 * @params  From year
 * @params  To year
 * @params  Rated from
 * @params  Rated to
 * @access  Public
 */
router.get(
  '/filter/:genreArray/:fromYear/:toYear/:ratedFrom/:ratedTo',
  (req: HttpRequest, res: HttpResponse) => {
    // Extract parameters from URI
    const { fromYear, toYear, ratedFrom, ratedTo } = req.params;
    const genreArray: string[] = JSON.parse(req.params.genreArray);

    // If genreArray is empty, do not filter on genres
    const genreQuery =
      genreArray.length > 0
        ? // This query returns movies matching _all_ genres in genreArray
          { genres: { $all: genreArray } }
        : // This query returns true for all movies
          { genres: { $type: 'array' } };

    Movie.find({
      $and: [
        // Query based on genreArray
        genreQuery,
        // Next two queries filters on year and rating
        // $gte = "greater than or equal", $lte = "less than or equal"
        // Using both = "in range"
        { year: { $gte: fromYear, $lte: toYear } },
        { rating: { $gte: ratedFrom, $lte: ratedTo } },
      ],
    })
      .then((movies: MovieDoc[] | null) => res.json(movies))
      .catch((error: string) => {
        console.log('Error on GET movies/filter/ : ' + error);
        res.status(404).json({ success: false });
      });
  }
);

export default router;
