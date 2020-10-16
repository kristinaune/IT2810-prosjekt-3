import { HttpRequest, HttpResponse, MovieType } from "../types";
import express from 'express'
import Movie from '../models/Movie'

const router = express.Router();

/**
 * @route   GET api/movies
 * @desc    Gets all movies
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
  Movie.find({ imdbId: req.params.imdbId })
    .then((movie: MovieType) => res.json(movie))
    .catch((error: string) => res.status(404).json({ success: false }));
});

export default router;
