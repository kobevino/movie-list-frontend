import { createSelector } from "reselect";
import { StoreState } from "models";
import { MovieItem } from "models/movie";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { removeMoive } from "redux/actions/mylist";

const sortedMovies = createSelector(
  (state: StoreState) => state.mylist.list,
  list => list.sort((a: MovieItem, b: MovieItem) => +new Date(b.releaseDate) - +new Date(a.releaseDate))
);

function useWatchList() {
  const { list } = useSelector((state: StoreState) => ({
    list: sortedMovies(state)
  }));
  const dispatch = useDispatch();

  const onRemove = useCallback((id: number) => {
    dispatch(removeMoive(id))
  }, [dispatch]);
  
  return {
    list,
    onRemove
  }
}

export default useWatchList;