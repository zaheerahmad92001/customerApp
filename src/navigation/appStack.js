// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomStack from './bottomTabs/bottomStack';
import NotificationStack from './notificationStack';


const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="BottomStack" component={BottomStack} />
      <Stack.Screen name="notificationStack" component={NotificationStack} />
    </Stack.Navigator>
  );
}
export default AppStack;