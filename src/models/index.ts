import { MovieState } from "./movie";
import { MyListState } from './mylist';

export interface StoreState {
  movie: MovieState;
  mylist: MyListState;
}