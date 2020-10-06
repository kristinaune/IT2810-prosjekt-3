export interface MovieType {
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
