import { combineReducers } from 'redux';
import movies from './movies/reducers';

const rootReducer = combineReducers({
  movies: movies,
});

export default rootReducer;