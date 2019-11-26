import React from 'react';

import './MovieInfo.scss';
import { MovieItem } from 'models/movie';

const { REACT_APP_MOVIE_IMG_URL } = process.env;

interface Props {
  movie: MovieItem;
  onAdd?(id: number): void;
  onRemove?(id: number): void;
  type: string;
}

function MovieInfo({ movie, onAdd, onRemove, type }: Props) {
  const { title, poster, releaseDate, voteAverage, overview, id, genres } = movie;
  console.log(genres)
  return (
    <li className="movie-info">
      <div className="movie-info__inner">
        <div className="movie-info__image">
          <img src={`${REACT_APP_MOVIE_IMG_URL}/${poster}`} alt="" />
        </div>
        <div className="movie-info__description">
          <h3 className="movie-info__title">{title}<label className="movie-info__average">{voteAverage} <span>점</span></label></h3>
          <div className="movie-info__genres">
            {
              genres.map((genre: number, idx: number) => <span key={idx} className="movie-info__genre">{genre}</span>)
            }
          </div>
          <span className="movie-info__date">{releaseDate}</span>
          <p className="movie-info__overview">{overview}</p>
          {
            type === 'Upcoming movies' ? (
              <button type="button" className="btn movie-info__addBtn" onClick={(e) => onAdd && onAdd(id)}>ADD</button>
            ) : (
              <button type="button" className="btn movie-info__removeBtn" onClick={(e) => onRemove && onRemove(id)}>REMOVE</button>
            )
          }
        </div>
      </div>
    </li>
  )
}

export default React.memo(MovieInfo);