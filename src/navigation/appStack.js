// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './homeStack';
import BottomStack from './bottomTabs/bottomStack';


const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="BottomStack" component={BottomStack} />
    </Stack.Navigator>
  );
}
export default AppStack;