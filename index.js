/**
 * @format
 */
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RegisteredSuccessfuly from './src/screens/registeredSuccesfulyScreen/registeredSuccesfuly/RegisteredSuccesfuly';

AppRegistry.registerComponent(appName, () => RegisteredSuccessfuly);
