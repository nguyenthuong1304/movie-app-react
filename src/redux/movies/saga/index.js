import { call, put, takeEvery } from 'redux-saga/effects'
import * as type from "../reducers/types";
import getApi from "../../../api";

function fetchMoviePopular() {
  return getApi('movie/popular', {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => {
    console.log(response)
    return {
      movies: response.data.results,
      totalPage: response.data.total_pages
    }
  })
    .catch((error) => {throw error})
}

function* fetchMovies(action) {
  try {
    const results = yield call(fetchMoviePopular);
    yield put({type: type.GET_MOVIES_SUCCESS, ...results });
  } catch (e) {
    yield put({type: type.GET_MOVIES_FAILED, message: e.message});
  }
}


function* index() {
  yield takeEvery(type.GET_MOVIES_REQUESTED, fetchMovies);
}

export default index;