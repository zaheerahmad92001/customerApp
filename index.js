/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Recommended from './src/screens/recommendedScreen/recommended/recommended';

AppRegistry.registerComponent(appName, () => Recommended);
