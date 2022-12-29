import {useEffect, useState} from 'react';
import moviesDB from '../api/moviesDb';
import {MoviesDBNewPlaying, Movie} from '../interface/movieInterface';

export const useMovies = () => {
 const [isLoading, setIsLoading] =useState(true);
  const [cinemaMovies, setCinemaMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    //first request
    const resp = await moviesDB.get<MoviesDBNewPlaying>('/now_playing');
    setCinemaMovies(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    cinemaMovies,
    isLoading
  };
};
