import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/appStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
