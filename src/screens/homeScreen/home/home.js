import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import fontsFamily from '../../../assets/fontsFamily';

function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: fontsFamily.thin,
        }}>
        Home Screen
      </Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
