import { ofType, combineEpics, Epic } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { MovieActionType, MovieActions } from 'types/movie';
import { fetchMoviesSuccess } from 'redux/actions/movie';

const { REACT_APP_MOVIE_API_URL, REACT_APP_MOVIE_API_KEY } = process.env;

const fetchMoviesEpic: Epic<MovieActions> = (action$) =>
  action$.pipe(
    ofType(MovieActionType.FETCH_MOVIES_REQUEST),
    mergeMap(action => 
      ajax.get(`${REACT_APP_MOVIE_API_URL}/movie/upcoming?api_key=${REACT_APP_MOVIE_API_KEY}`).pipe(
        map((data) => {
          const payload = data.response.results.map((item: any) => ({ 
            id: item.id,
            title: item.title,
            voteAverage: item.vote_average,
            overview: item.overview,
            releaseDate: item.release_date,
            genres: item.genre_ids,
            poster: item.poster_path
          }));
          return fetchMoviesSuccess(payload);
        }),
      )
    )
  )

export default combineEpics(
  fetchMoviesEpic
)