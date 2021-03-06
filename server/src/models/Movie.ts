import { MovieDoc } from '../types';
import mongoose, { Schema } from 'mongoose';

/**
 * Defines the MovieModel with a Schema
 */
const MovieSchema = new Schema({
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

// Exports Movie as a mongoose model
export default mongoose.model<MovieDoc>('Movie', MovieSchema);
