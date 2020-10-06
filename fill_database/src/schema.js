const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  imdbId: String,
  rating: Number,
  runtime: Number,
  year: Number,
  poster: String,
  released: String,
  plot: String,
  genres: [String],
  director: [String],
  actors: [String],
  language: [String],
  country: [String],
});

exports.movieSchema = movieSchema;
