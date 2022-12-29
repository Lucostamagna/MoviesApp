import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';

const HomeScreen = () => {
  const {cinemaMovies, isLoading} = useMovies();

  //isloading
  if (true) {
    return (
      <View>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
};

export default HomeScreen;
