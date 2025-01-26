/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Spa from './src/screens/spaScreen/spa/spa';

AppRegistry.registerComponent(appName, () => Spa);
