import React, { useEffect } from 'react';
import Movie from "./Card/Movie";
import { Pagination } from 'antd';

const Main = (props) => {
  const { movies, loading, error, totalPage } = props;
  const onChangePage = (page) => {
    props.history.push({
      pathname: '',
      search: '?haha=2'
    })
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
              defaultCurrent={1}
              total={totalPage}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;