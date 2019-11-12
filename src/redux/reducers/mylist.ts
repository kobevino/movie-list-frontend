import { MyListState } from "models/mylist";
import { MyListActionType } from "types/mylist";
import { MovieItem } from "models/movie";


const initialState: MyListState = {
  list: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case MyListActionType.FETCH_ADDED_MOVIES:
      return {
        ...state,
        list: [
          ...state.list,
          ...action.newData
        ]
      }
    case MyListActionType.REMOVE_MOVIE:
      return {
        ...state,
        list: state.list.filter((item: MovieItem) => item.id !== action.id)
      }
    default:
      return state;
  }
}

