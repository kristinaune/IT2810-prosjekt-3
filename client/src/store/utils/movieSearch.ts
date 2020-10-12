import { MovieType } from "../../types";

/**
 * Checks if a string matches a search.
 * @param search String to search for (title, actor or director)
 * @param string
 * @returns Whether a search matches or not.
 */
const match = (search: string, string: string | Array<string>) => {
  return string.toString().toLowerCase().includes(search!.toLowerCase());
};

/**
 * Checks if a movie matches a search.
 * @param search What we're searching for
 * @param movie Movie we're searching in
 */
const matchAny = (search: string, movie: MovieType) => {
  return (
    match(search, movie.title) ||
    match(search, movie.actors) ||
    match(search, movie.director)
  );
};

const movieSearch = (search: string, movies: Array<MovieType>) => {
  return movies.filter((movie: MovieType) => matchAny(search, movie))
}

export default movieSearch;
