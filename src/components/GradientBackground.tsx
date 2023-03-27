import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientProps {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: GradientProps) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#F39C12', '#F7DC6F', '#FDFEFE']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
      />
      {children}
    </View>
  );
};

export default GradientBackground;
