import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../interface/movieInterface';
import {MoviePoster} from './MoviePoster';

interface HorizaontalSliderProps {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: HorizaontalSliderProps) => {
  return (
    <View style={{height: 350, marginTop: 50}}>
      {title && (
        <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft:13}}> {title}</Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={160} height={250} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
