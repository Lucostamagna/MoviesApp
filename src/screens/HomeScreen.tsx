import React from 'react';
import {ActivityIndicator,  View, FlatList, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import moviesDB from '../api/moviesDb';
import HorizontalSlider from '../components/HorizontalSlider';


const { width } = Dimensions.get("screen")
const HomeScreen = () => {
  const {nowPlaying, popular, topReated, upComing, isLoading} = useMovies();

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
       data= {nowPlaying}
       renderItem={({item}:any)=> <MoviePoster movie={item} /> }
        horizontal={true}
        snapToInterval={width }
        decelerationRate="fast"
        snapToAlignment="center"
        
        nestedScrollEnabled
       />
     

    </View>
    <HorizontalSlider title="Popular" movies={nowPlaying}/>
    <HorizontalSlider title="Top Rated" movies={topReated}/>
    <HorizontalSlider title="Up Coming" movies={upComing}/>
    
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
