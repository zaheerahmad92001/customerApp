/**
 * @format
 */
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OtpView from './src/screens/otpScreen/otp/otp';

AppRegistry.registerComponent(appName, () => OtpView);
