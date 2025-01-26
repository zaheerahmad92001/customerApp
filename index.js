/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Avenue from './src/screens/avenueScreen/avenue/avenue';

AppRegistry.registerComponent(appName, () => Avenue);
