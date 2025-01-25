/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Profile from './src/screens/profileScreen/profile/profile';

AppRegistry.registerComponent(appName, () => Profile);
