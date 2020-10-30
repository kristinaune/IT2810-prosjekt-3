// Interface for Movie
export interface IMovie {
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

// Interface for User
export interface IUser {
  name?: string;
  email?: string;
  movieList?: [string];
}

// Movies-store interface
export interface UserState extends IUser {
  errorMsg?: string;
  authState: { auth: boolean; type: string };
}

// Movies-store interface
export interface MoviesState {
  movies: IMovie[];
  type?: string;
}

// Redux store interface
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
