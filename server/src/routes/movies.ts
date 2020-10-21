import { HttpRequest, HttpResponse, MovieType, MovieDoc } from "../types";
import express from 'express'
import Movie from '../models/Movie'

const router = express.Router();

/**
 * @route   GET api/movies
 * @desc    Gets all movies in the database
 * @access  Public
 */
router.get('/', (req : HttpRequest, res: HttpResponse) => {
  Movie.find()
    .sort({ rating: -1 })
    .then((movies: Array<MovieType>) => res.json(movies));
});

/**
 * @route   GET api/movies/:imdbId
 * @desc    Gets a movie by it's IMDb-ID
 * @access  Public
 */
router.get('/:imdbId', (req : HttpRequest, res: HttpResponse) => {
  Movie.findOne({ imdbId: req.params.imdbId })
    .then((movie: MovieDoc | null) => res.json(movie))
    .catch((error: string) => {
      console.log('Error on GET movies/:imdbId, using id' + req.params.id + '  :  ' + error);
      res.status(404).json({ success: false })});
});

export default router;