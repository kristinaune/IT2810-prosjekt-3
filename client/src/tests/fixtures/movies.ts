import { IMovie } from '../../types';

const exampleMovies: IMovie[] = [
  {
    genres: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    actors: [
      'Marlon Brando',
      'Al Pacino',
      'James Caan',
      'Richard S. Castellano',
    ],
    language: ['English', 'Italian', 'Latin'],
    country: ['USA'],
    title: 'The Godfather',
    imdbId: 'tt0068646',
    rating: 9.2,
    runtime: 175,
    year: 1972,
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    released: '24 Mar 1972',
    plot:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  },
  {
    genres: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    actors: ['Al Pacino', 'Robert Duvall', 'Diane Keaton', 'Robert De Niro'],
    language: ['English', 'Italian', 'Spanish', 'Latin', 'Sicilian'],
    country: ['USA'],
    title: 'The Godfather: Part II',
    imdbId: 'tt0071562',
    rating: 9,
    runtime: 202,
    year: 1974,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    released: '18 Dec 1974',
    plot:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
  },
  {
    genres: ['Crime', 'Drama'],
    director: ['Fernando Meirelles', 'Kátia Lund(co-director)'],
    actors: [
      'Alexandre Rodrigues',
      'Leandro Firmino',
      'Phellipe Haagensen',
      'Douglas Silva',
    ],
    language: ['Portuguese'],
    country: ['Brazil', 'France', 'Germany'],
    title: 'City of God',
    imdbId: 'tt0317248',
    rating: 8.6,
    runtime: 130,
    year: 2002,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTM4MjZjNWEtMmQxMi00YzY5LTg4ZTAtODJlMDVkZWZmNTVhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
    released: '13 Feb 2004',
    plot:
      "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
  },
  {
    genres: ['Comedy', 'Drama', 'Family', 'Romance'],
    director: ['Charles Chaplin'],
    actors: [
      'Charles Chaplin',
      'Paulette Goddard',
      'Henry Bergman',
      'Tiny Sandford',
    ],
    language: ['English'],
    country: ['USA'],
    title: 'Modern Times',
    imdbId: 'tt0027977',
    rating: 8.5,
    runtime: 87,
    year: 1936,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    released: '25 Feb 1936',
    plot:
      'The Tramp struggles to live in modern industrial society with the help of a young homeless woman.',
  },
];

export default exampleMovies;
