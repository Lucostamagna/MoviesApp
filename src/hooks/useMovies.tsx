import {useEffect, useState} from 'react';
import moviesDB from '../api/moviesDb';
import {MoviesDBMoviesResponse, Movie} from '../interface/movieInterface';

interface MovieStateProps {
  nowPlaying: Movie[];
  popular: Movie[];
  topReated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieState, setMovieState] = useState<MovieStateProps>({
    nowPlaying: [],
    popular: [],
    topReated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise =
      moviesDB.get<MoviesDBMoviesResponse>('/now_playing');
    const popularPromise = moviesDB.get<MoviesDBMoviesResponse>('/popular');
    const topRatedPromise = moviesDB.get<MoviesDBMoviesResponse>('/top_rated');
    const upComingPromise = moviesDB.get<MoviesDBMoviesResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    setMovieState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topReated: response[2].data.results,
      upComing: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    ...movieState,
    isLoading,
  };
};
