export interface MovieItem {
  id: number;
  title: string;
  voteAverage: number;
  overview: string;
  releaseDate: string;
  genres: number[] | string[] | any;
  poster: string | null;
}

export interface GenreItem {
  id: number;
  name: string;
}

export interface MovieState {
  list: MovieItem[];
  isLoaded: boolean;
  genres: GenreItem[]
}

