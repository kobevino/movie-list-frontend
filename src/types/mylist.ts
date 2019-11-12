import { Action } from 'redux';
import { MovieItem } from 'models/movie';

export enum MyListActionType {
  FETCH_ADDED_MOVIES = 'mylist/FETCH_ADDED_MOVIES',
  REMOVE_MOVIE = 'mylist/REMOVE_MOVIE',
  UNCHANGED_DATA = 'mylist/UNCHANGED_DATA'
}

type MyListAction = Action<MyListActionType>;

export interface FetchAddedMoviesAction extends MyListAction {
  type: MyListActionType.FETCH_ADDED_MOVIES;
  newData: MovieItem[];
}

export interface DeleteMovieAction extends MyListAction {
  type: MyListActionType.REMOVE_MOVIE;
  id: number;
}

export interface UnChangedDataAction extends MyListAction {
  type: MyListActionType.UNCHANGED_DATA;
}

export type MyListActions = 
  | FetchAddedMoviesAction
  | DeleteMovieAction
  | UnChangedDataAction
