import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interface/movieInterface';

//What arguments does each screen receive?

export type RootStackParam={
  HomeScreen:undefined; //doesn´t receive arguments
  DetailScreen: Movie ;

}


const Stack = createStackNavigator<RootStackParam>();

//navigation- two screen
export const Navigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false,
      cardStyle:{
      // backgroundColor:'white'
      }
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      
    </Stack.Navigator>
  );
}