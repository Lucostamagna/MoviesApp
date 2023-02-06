import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View, FlatList, Dimensions, ScrollView} from 'react-native';
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
    <View style={{ height:350, marginTop:50}}>

<Text style={{fontSize:30, fontWeight:'bold'}}> PELICULAS EN CINE</Text>
<FlatList
data= {cinemaMovies}
renderItem={({item}:any)=> <MoviePoster movie={item} width={160}  height={250} /> }
keyExtractor={(item)=> item.id.toString()}
horizontal={true}
showsHorizontalScrollIndicator={false}
/>



    </View>
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
