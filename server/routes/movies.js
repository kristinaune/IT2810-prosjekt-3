const express = require('express');
const router = express.Router();

// Imports the Movie-model
const Movie = require('../models/Movie');

/**
 * @route   GET api/movies
 * @desc    Gets all movies
 * @access  Public
 */
router.get('/', (req, res) => {
  Movie.find()
    .sort({ rating: -1 })
    .then((movies) => res.json(movies));
});

/**
 * @route   GET api/movies/:imdbId
 * @desc    Gets a movie by it's IMDb-ID
 * @access  Public
 */
router.get('/:imdbId', (req, res) => {
  Movie.find({imdbId: req.params })
    .then((movie) => res.json(movie))
    .catch((e) => res.status(404).json({ success: false, imdbId }));
});


module.exports = router;

