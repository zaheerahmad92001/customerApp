/**
 * @format
 */
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignUp from './src/screens/signUpScreen/signup/signUp';

AppRegistry.registerComponent(appName, () => SignUp);
