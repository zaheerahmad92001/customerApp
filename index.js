/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Profile from './src/screens/profileScreen/profile/profile';
import Settings from './src/screens/settingScreen/settings/settings';

AppRegistry.registerComponent(appName, () => Settings);
