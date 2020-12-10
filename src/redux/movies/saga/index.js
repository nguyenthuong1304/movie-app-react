import { call, put, takeEvery } from 'redux-saga/effects'
import * as type from "../reducers/types";
import getApi from "../../../api";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchMoviePopular() {
  await sleep(500);
  const urlParams = new URLSearchParams(window.location.search);
  let page = urlParams.get('page') || 1;
  return getApi('movie/popular', {}, `?page=${page}`).then(response => {
    return {
      movies: response.data.results,
      totalPage: response.data.total_pages
    }
  })
    .catch((error) => {throw error})
}

function fetchMovieDetail(path) {
  return getApi(path, {}, 'append_to_response=credits,videos,images')
    .then(res => {
      return res.data
    }).catch(err => {throw err});
}

function* fetchMovies(action) {
  try {
    const movies = yield call(fetchMoviePopular);
    yield put({type: type.GET_MOVIES_SUCCESS, ...movies });
  } catch (e) {
    yield put({type: type.GET_MOVIES_FAILED, message: e.message});
  }
}

function* fetchMovie(action) {
  try {
    const { path } = action.payload;
    const movie = yield call(fetchMovieDetail, path);
    yield put({type: type.GET_MOVIES_DETAIL_SUCCESS, movie });
  } catch (e) {
    yield put({type: type.GET_MOVIES_FAILED, message: e.message});
  }
}


function* index() {
  yield takeEvery(type.GET_MOVIES_REQUESTED, fetchMovies);
  yield takeEvery(type.GET_MOVIE_DETAIL, fetchMovie);
}

export default index;