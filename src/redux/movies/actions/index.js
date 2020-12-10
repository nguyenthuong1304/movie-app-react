import * as type from '../reducers/types';

export function getMovies(movies) {
  return { 
    type: type.GET_MOVIES,
    payload: movies,
  }
}

export function getMovie(movie) {
  return {
    type: type.GET_MOVIE_DETAIL,
    payload: movie,
  }
}

export function getMoviesRequest() {
  return {
    type: type.GET_MOVIES_REQUESTED,
  }
}
