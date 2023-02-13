import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image,  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interface/movieInterface';
import './MoviePosterThemes'
import { styles } from './MoviePosterThemes';


interface PropsMovie {
    movie: Movie;
    height?:number;
    width?:number;
}
export const MoviePoster = ({ movie, height=420, width=300 }: PropsMovie) => {
 

const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
const navigator = useNavigation();

return (
    <TouchableOpacity  
    activeOpacity={0.9}
    onPress={()=> navigator.navigate('DetailScreen')}
      style={{width, height, marginHorizontal:7}}>
      <View style={styles.image_container}>
        <Image
        source={{uri}}
        style={styles.image}
       />
       </View>
    </TouchableOpacity >
  )
}




