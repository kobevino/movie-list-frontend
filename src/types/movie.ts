import { Action } from 'redux';
import { MovieItem } from 'models/movie';

export enum MovieActionType {
  FETCH_MOVIES_REQUEST = 'movie/FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCESS = 'movie/FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE = 'movie/FETCH_MOVIES_FAILURE',
  ADD_MOVIE = 'movie/ADD_MOVIE',
}

type MovieAction = Action<MovieActionType>;

export interface FetchMoviesRequestAction extends MovieAction {
  type: MovieActionType.FETCH_MOVIES_REQUEST
}

export interface FetchMoviesSuccessAction extends MovieAction {
  type: MovieActionType.FETCH_MOVIES_SUCCESS;
  payload: MovieItem[];
}

export interface FetchMoviesFailureAction extends MovieAction {
  type: MovieActionType.FETCH_MOVIES_FAILURE;
}

export interface AddMovieAction extends MovieAction {
  type: MovieActionType.ADD_MOVIE;
  id: number;
}

export type MovieActions = 
  | FetchMoviesRequestAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailureAction
  | AddMovieAction
