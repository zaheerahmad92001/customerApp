/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppIntro from './src/screens/appIntroScreen/appIntro/appIntro';

AppRegistry.registerComponent(appName, () => AppIntro);
