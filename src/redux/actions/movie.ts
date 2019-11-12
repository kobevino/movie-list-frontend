import { MovieActionType, FetchMoviesRequestAction, FetchMoviesSuccessAction, FetchMoviesFailureAction, AddMovieAction } from 'types/movie';
import { MovieItem } from 'models/movie';

export const fetchMoviesRequest = (): FetchMoviesRequestAction => ({
  type: MovieActionType.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (payload: MovieItem[]): FetchMoviesSuccessAction => ({
  type: MovieActionType.FETCH_MOVIES_SUCCESS,
  payload
});

export const fetchMoviesFailure = (): FetchMoviesFailureAction => ({
  type: MovieActionType.FETCH_MOVIES_FAILURE
});

export const addMovie = (id: number): AddMovieAction => ({
  type: MovieActionType.ADD_MOVIE,
  id
});