import { combineEpics } from 'redux-observable';
import movie from './movie';
import mylist from './mylist';


export default combineEpics(
  movie,
  mylist
);
