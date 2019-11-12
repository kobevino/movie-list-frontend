import { ofType, combineEpics, Epic } from 'redux-observable';
import { map } from 'rxjs/operators';
import { MovieActionType } from 'types/movie';
import { fetchAddedMovies, unChangedData } from 'redux/actions/mylist';
import { MovieItem } from 'models/movie';

const fetchAddedBeerEpic: Epic = (action$, state$) => 
  action$.pipe(
    ofType(MovieActionType.ADD_MOVIE),
    map((action) => {
      const isExisting = state$.value.mylist.list.filter((item: MovieItem) => item.id === action.id)
      if (!isExisting.length) {
        const newData = state$.value.movie.list.filter((item: MovieItem) => (item.id === action.id));
        return fetchAddedMovies(newData)
      } else {
        return unChangedData();
      }
    }),
  )

export default combineEpics(
  fetchAddedBeerEpic,
)