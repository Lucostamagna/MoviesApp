import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View, FlatList, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import moviesDB from '../api/moviesDb';


const { width } = Dimensions.get("screen")
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
      {/* <MoviePoster
       movie={cinemaMovies[0]} /> */}
       <FlatList
       showsHorizontalScrollIndicator={false}
       data= {cinemaMovies}
       renderItem={({item}:any)=> <MoviePoster movie={item} /> }
        horizontal={true}
        snapToInterval={width }
        decelerationRate="fast"
        snapToAlignment="center"
        
        nestedScrollEnabled
       />
     

    </View>
  );
};

export default HomeScreen;
