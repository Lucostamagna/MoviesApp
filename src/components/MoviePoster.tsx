import React from 'react'
import { View, Text, Image,  } from 'react-native';
import { Movie } from '../interface/movieInterface';
import './MoviePosterThemes'
import { styles } from './MoviePosterThemes';


interface Props {
    movie: Movie;
}
export const MoviePoster = ({movie}: Props) => {
 

const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`

return (
    <View style={styles.view}>
      <View style={styles.image_container}>
        <Image
        source={{uri}}
        style={styles.image}
       />
       </View>
    </View>
  )
}




