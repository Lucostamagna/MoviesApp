import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  view: {
    width: 300,
    height: 420,
  },
  image_container: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 9,
  },
  image_border:{
    flex:1,
    overflow:'hidden',
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
                     

  },
  imagen_poster: {
    flex: 1,
  },
  margin_container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
