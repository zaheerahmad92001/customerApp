/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NailArt from './src/screens/nailArtScreen/nailArt/nailArt';

AppRegistry.registerComponent(appName, () => NailArt);
