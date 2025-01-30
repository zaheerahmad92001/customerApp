/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LanguageLogin from './src/screens/loginScreen/login/login';

AppRegistry.registerComponent(appName, () => LanguageLogin);
