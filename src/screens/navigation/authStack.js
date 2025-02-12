import * as React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Login from '../loginScreen/login/login';
import SignUp from '../signUpScreen/signUp';
import OtpView from '../otpScreen/otp';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator 
    initialRouteName="signUp"
    screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="otpView" component={OtpView} />
    </Stack.Navigator>
  );
}
export default AuthStack;