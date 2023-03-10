import 'react-native-gesture-handler';
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/NavigationControllers';
import FedeScrenn from './src/screens/FedeScrenn';

const App = () => {
  return (
    <NavigationContainer>
    {/* <Navigation/> */}
    <FedeScrenn/>
    </NavigationContainer>
    
  )
}

export default App;

