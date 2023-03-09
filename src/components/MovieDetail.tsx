import React from 'react'
import { View, Text } from 'react-native';
import { MovieFull } from '../interface/movieInterface';
import { Cast } from '../interface/creditsInterface';
import CastIten from './CastIten';


interface detailProps{
movieFull:MovieFull;
cast:Cast[]


}
const MovieDetail = ({movieFull,cast }: detailProps) => {
  return (
    <>
        <View style={{marginHorizontal:20}}>
          <Text>  - {movieFull.genres.map(g=>g.name).join(', ')}</Text>
        </View>
        <View style={{marginHorizontal:20}}>
          <Text style={{fontSize:15, fontWeight:'bold', marginTop:10}}> SINAPSIS </Text>
          <Text> {movieFull.overview}</Text>
          <Text style={{fontSize:15, fontWeight:'bold', marginTop:10}}> LENGUAJE</Text>
          <Text> {movieFull.original_language}</Text>

          <View style={{marginTop:10, marginBottom:100}}>
            <Text style={{fontSize:15, fontWeight:'bold', marginTop:10}}> ACTORES </Text>
          <CastIten actor={cast[0]}/>
          </View>
        </View>
    </>
  )
}

export default MovieDetail
