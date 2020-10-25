export interface MovieType extends Record<string, any> {
  title: string;
  imdbId: string;
  rating: number;
  runtime: number;
  year: number;
  poster: string;
  released: string;
  plot: string;
  genres: [string];
  director: [string];
  actors: [string];
  language: [string];
  country: [string];
}

export interface User
  extends Record<string, string | [string] | undefined | [boolean, string]> {
  authState: [boolean, string];
  name?: string;
  email?: string;
  movieList?: [string];
}

export enum Sort {
  DESC = -1,
  ASC = 1,
  YEAR = 'year',
  RATING = 'rating',
  RUNTIME = 'runtime',
}
