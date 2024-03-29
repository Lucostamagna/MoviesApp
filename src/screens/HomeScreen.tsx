import React from 'react';
import {
  ActivityIndicator,
  View,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import moviesDB from '../api/moviesDb';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';

const {width} = Dimensions.get('screen');
const HomeScreen = () => {
  const {nowPlaying, popular, topReated, upComing, isLoading} = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={100} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View  >
          <View style={{marginTop: 40, }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              horizontal={true}
              // snapToInterval={width}
              decelerationRate="fast"
              snapToAlignment="center"
              nestedScrollEnabled
              
            />
          </View>
          <HorizontalSlider title="Popular" movies={nowPlaying} />
          <HorizontalSlider title="Top Rated" movies={topReated} />
          <HorizontalSlider title="Up Coming" movies={upComing} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
