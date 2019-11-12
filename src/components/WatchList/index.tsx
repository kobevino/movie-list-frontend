import React from 'react';
import { MovieItem } from 'models/movie';
import MovieInfo from 'components/MovieInfo';

import './WatchList.scss';
import Empty from 'components/Empty';
import useWatchList from 'hooks/useWatchList';


interface Props {
  pageTitle: string;
}

function WatchList({ pageTitle }: Props) {
  const { list, onRemove } = useWatchList();

  return (
    <div className="watch-list">
      <h2>{pageTitle}</h2>
      {
        !list.length ?  (<Empty />) : (
          <ul>
            {
              list.map((movie: MovieItem) => (
                <MovieInfo 
                  key={movie.id} 
                  movie={movie}
                  type={pageTitle}
                  onRemove={onRemove}
                />
                )
              )
            }
          </ul>
        )
      }
    </div>
  )
}

export default WatchList;