import Main from "../components/Main";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getMoviesRequest } from "../redux/movies/actions";

export function MainContainer(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesRequest());
  }, [])

  const movies = useSelector(state => state.movies.movies);
  const error = useSelector(state => state.movies.error);
  const totalPage = useSelector(state => state.movies.totalPage);

  return (
    <Main
      movies={movies}
      error={error}
      totalPage={totalPage}
      {...props}
    />
  )
}