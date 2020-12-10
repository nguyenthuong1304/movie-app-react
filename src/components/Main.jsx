import React, { useEffect } from 'react';
import Movie from "./Card/Movie";
import { Pagination } from 'antd';
import {useDispatch} from "react-redux";
import {getMoviesRequest} from "../redux/movies/actions";

const Main = ({ movies, loading, error, totalPage, history }) => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const pageNum = urlParams.get('page') || 1;

  const onChangePage = (page) => {
    let currentUrlParams = new URLSearchParams(window.location.search);
    currentUrlParams.set('page', page);
    history.push(window.location.pathname + "?" + currentUrlParams.toString());
    dispatch(getMoviesRequest());
  }

  return (
    <main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {movies.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
            {movies.length > 0 && movies.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
          <div className='text-center'>
            <Pagination
              onChange={onChangePage}
              defaultCurrent={pageNum}
              total={totalPage}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;