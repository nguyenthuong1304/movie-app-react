import * as type from './types';

const initialState = {
  movies: [],
  movie: {},
}

export default function movies(state = initialState, action) {
  switch (action.type) {
    case type.GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case type.GET_MOVIES_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.movies,
        totalPage: action.totalPage
      }
    case type.GET_MOVIES_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.movie,
      }
    case type.GET_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    case type.GET_MOVIE_DETAIL:
      return {
        ...state,
        loading: true,
      }
    case type.ADD_USER:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      }
    default:
      return state
  }
}