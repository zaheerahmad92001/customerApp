/**
 * @format
 */
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import reslovedComplaintScreen from './src/screens/complaints/resolvedrequest/ResolvedRequestScreen';
AppRegistry.registerComponent(appName, () => reslovedComplaintScreen);


