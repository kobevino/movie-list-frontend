import React from 'react';
import MovieInfo from 'components/MovieInfo';
import { MovieItem } from 'models/movie';
import Loading from 'components/Loading';

import './UpcomingMovies.scss';
import useUpcomingMovies from 'hooks/useUpcomingMovies';

interface Props {
  pageTitle: string;
}

function UpcomingMovies({ pageTitle }: Props) {
  const { list, onAdd } = useUpcomingMovies();

  return (
    <div className="upcoming-movies">
      <h2>{pageTitle}</h2>
      {
        !list.length ? (<Loading />) : (
          <ul>
            {
              list.map((movie: MovieItem) => (
                <MovieInfo 
                  key={movie.id} 
                  movie={movie}
                  onAdd={onAdd}
                  type={pageTitle}
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

export default UpcomingMovies;