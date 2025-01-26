/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Salon from './src/screens/salonScreen/salon/salon';

AppRegistry.registerComponent(appName, () => Salon);
