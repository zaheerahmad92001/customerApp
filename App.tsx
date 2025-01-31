import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/appStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  return (
    <GestureHandlerRootView>
    <BottomSheetModalProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
