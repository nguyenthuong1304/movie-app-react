import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Skeleton, Switch, List, Avatar } from 'antd';
import MainDetail from "../components/MainDetail";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/movies/actions";

const style = {
  minHeightBody : {
    minHeight: '60vh'
  }
}
const MovieDetail = ({ location }) => {
  const movie = useSelector(state => state.movies.movie);
  const loading = useSelector(state => state.movies.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie({ path: location.pathname}))
  }, [])

  return (
    <main className="container mt-5" style={style.minHeightBody}>
      {
        loading || Object.keys(movie).length === 0
        ? <Skeleton loading={true} active/>
        : <MainDetail movie={movie}/>
      }
    </main>
  )
}

export default MovieDetail;