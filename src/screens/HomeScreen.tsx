import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import moviesDB from '../api/moviesDb';
import { MoviesDBNewPlaying } from '../interface/movieInterface';

const HomeScreen = () => {

  useEffect(()=>{
    moviesDB.get<MoviesDBNewPlaying>('/now_playing')
    .then (res =>{
      console.log(res.data.results[1].title)
    })
  }, [])
  return (
  <View>
    <Text> HOME </Text>
    
  </View>
  )
}

export default HomeScreen;

