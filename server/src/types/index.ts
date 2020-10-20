import {Document} from 'mongoose';


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

export interface UserType{
  uid?: string,
  name: string,
  email: string,
  movieList: [string]
}

export interface UserDoc extends UserType, Document{}

export interface MovieDoc extends MovieType, Document{}

export interface HttpRequest extends Express.Request {
  body: {name: string, email: string, imdbId: string}
  params: Record<string, any>
}

export interface HttpResponse extends Express.Response {
  status: Function,
  json: Function
}