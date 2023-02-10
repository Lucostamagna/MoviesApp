import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View, FlatList, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import moviesDB from '../api/moviesDb';
import HorizontalSlider from '../components/HorizontalSlider';


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
    <ScrollView>
    <View>
    <View style={{marginTop: top + 20}}>
      
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
    <HorizontalSlider title="En cine" movies={cinemaMovies}/>
    <HorizontalSlider  movies={cinemaMovies}/>
    <HorizontalSlider title="En cine" movies={cinemaMovies}/>
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
