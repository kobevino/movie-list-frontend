import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "models";
import { useCallback, useEffect } from "react";
import { addMovie, fetchMoviesRequest } from "redux/actions/movie";
import { createSelector } from "reselect";
import { GenreItem } from "models/movie";

function flatten(source: any) {
  return source.reduce((acc: any, item: any) => acc.concat(Array.isArray(item) ? flatten(item) : item), []);
}


const listWithConvertedGenre = createSelector(
  (state: StoreState) => state.movie.list,
  (state: StoreState) => {
    const genreMap = new Map();
    state.movie.genres.forEach(genre => genreMap.set(genre.id, genre.name))
    return genreMap;
  },
  // modified
  (list, genreMap) => list.map(movie => {
    return {
      ...movie,
      genres: [ ...movie.genres.map((id: number) => genreMap.get(id)) ]
    }
  })
  // (list, genres) => list.map(movie => ({
  //   ...movie,
  //   genres: flatten(movie.genres.map((id: number) => genres.filter(genre => genre.id === id).map(genre => genre.name)))
  // }))
)

function useUpcomingMovies() {
  const { list, isLoaded } = useSelector((state: StoreState) => ({
    // list: state.movie.list,
    list: listWithConvertedGenre(state),
    isLoaded: state.movie.isLoaded
  }));
  const dispatch = useDispatch();


  const onAdd = useCallback((id: number) => {
    dispatch(addMovie(id));
  }, [dispatch]);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchMoviesRequest());
    }
  }, [isLoaded, dispatch]);


  return {
    list,
    onAdd
  }
}

export default useUpcomingMovies;