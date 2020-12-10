import React from "react";
const style = {
  overview: {
    height: '100px',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '200px',
    maxHeight: '200px',
    display: 'block',
    margin: '0 auto',
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    maxWidth: '280px',
  }
};
const Movie = (props) => {
  const { movie } = props;
  return (
    <div className="col-md-3">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} style={style.image}/>
        <div className="card-body">
          <h4 style={style.title}>{movie.title}</h4>
          <p className="card-text" style={style.overview}>{ movie.overview }</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-muted">{ movie.release_date }</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;