import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import moviesDB from '../api/moviesDb';

const HomeScreen = () => {
  const {cinemaMovies, isLoading} = useMovies();

  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator  size={100} />
      </View>
    );
  }
  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster
       movie={cinemaMovies[3]} />
    </View>
  );
};

export default HomeScreen;
