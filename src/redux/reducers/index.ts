import { combineReducers } from 'redux';
import movie from './movie';
import mylist from './mylist';

export default combineReducers({
  movie,
  mylist
});
