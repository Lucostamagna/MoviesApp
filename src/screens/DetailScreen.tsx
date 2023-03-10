import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {RootStackParam} from '../navigation/NavigationControllers';
import {styles} from '../components/MoviePosterThemes';
import {ScrollView} from 'react-native-gesture-handler';
import useMovieDetail from '../hooks/useMovieDetail';
import MovieDetail from '../components/MovieDetail';
import CastIten from '../components/CastIten';

const screenHeigth = Dimensions.get('screen').height;

interface PropsDetailScreen
  extends StackScreenProps<RootStackParam, 'DetailScreen'> {}

const DetailScreen = ({route, navigation}: PropsDetailScreen) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigator = useNavigation();

  const {isLoading, cast, movieFull} = useMovieDetail(movie.id);
  console.log(movie.id);

  return (
    <ScrollView>
      <View style={style.imagen_container}>
        <View style={styles.image_border}>
          <Image source={{uri}} style={styles.imagen_poster} />
        </View>
      </View>
      <View style={styles.margin_container}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size={35} color="grey" style={{marginTop: 25}} />
        ) : (
          <MovieDetail movieFull={movieFull!} cast={cast} />
        )}
      </View>
      <TouchableOpacity
        style={{backgroundColor: 'red'}}
        onPress={() => navigator.navigate('HomeScreen')}>
        <Text> hola</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  imagen_container: {
    width: '100%',
    height: screenHeigth * 0.7,
    // backgroundColor:'red',

    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    elevation: 3,
  },
});

export default DetailScreen;
