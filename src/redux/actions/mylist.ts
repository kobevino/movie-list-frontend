import { MovieItem } from 'models/movie';
import { FetchAddedMoviesAction, MyListActionType, DeleteMovieAction, UnChangedDataAction } from 'types/mylist';

export const fetchAddedMovies = (newData: MovieItem[]): FetchAddedMoviesAction => ({
  type: MyListActionType.FETCH_ADDED_MOVIES,
  newData
});

export const removeMoive = (id: number): DeleteMovieAction => ({
  type: MyListActionType.REMOVE_MOVIE,
  id
});

export const unChangedData = (): UnChangedDataAction => ({
  type: MyListActionType.UNCHANGED_DATA,
});