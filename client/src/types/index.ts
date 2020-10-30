export interface IMovie extends Record<string, any> {
  title: string;
  imdbId: string;
  rating: number;
  runtime: number;
  year: number;
  poster: string;
  released: string;
  plot: string;
  genres: string[];
  director: string[];
  actors: string[];
  language: string[];
  country: string[];
}

export interface IUser {
  name?: string;
  email?: string;
  movieList?: [string];
}

export interface UserState extends IUser {
  errorMsg?: string;
  authState: { auth: boolean; type: string };
}

export interface MoviesState {
  movies: IMovie[];
  type?: string;
}

export interface StoreState {
  movies: MoviesState;
  user: UserState;
  displayMovie: IMovie | null;
}

export enum Sort {
  DESC = -1,
  ASC = 1,
  YEAR = 'year',
  RATING = 'rating',
  RUNTIME = 'runtime',
}
