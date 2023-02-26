import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { RootStackParam } from '../navigation/NavigationControllers';

interface PropsDetailScreen extends StackScreenProps<RootStackParam, 'DetailScreen'> {};


const DetailScreen = ({route}: PropsDetailScreen) => {

  const movie=route.params
  
  return (
  <View>
    <Text> DETAIL</Text>
  </View>
  )
}

export default DetailScreen;                                              