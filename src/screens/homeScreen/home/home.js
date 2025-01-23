import React from 'react';
import { View, Text } from 'react-native';
import fontsFamily from '../../../assets/fontsFamily';



function HomeScreen() {
  return (
    <View style={{ 
      flex: 1, alignItems: 'center',
       justifyContent: 'center', }}>
      <Text
      style={{
        fontSize:20,
        fontFamily: fontsFamily.thin}}
      >Home Screen</Text>
    </View>
  );
}

export default HomeScreen;