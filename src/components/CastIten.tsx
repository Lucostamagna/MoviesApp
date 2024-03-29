import React from 'react';
import {Cast} from '../interface/creditsInterface';
import {Text, View, Image, StyleSheet} from 'react-native';

interface castProps {
  actor: Cast;
}

const CastIten = ({actor}: castProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderTopLeftRadius: 50, borderRadius:50}}
        />
      )}

      <View style={styles.actor_info}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 15, color: 'grey'}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F2F3F4',
    height: 60,
    width:250,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 9,
    marginHorizontal: 10,

    paddingTop: 3,
    paddingBottom: 3,
  },
  actor_info: {
    marginLeft: 10,
  },
});
export default CastIten;
