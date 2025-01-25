/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NotificationSettings from './src/screens/notificationSettingsScreen/notificationSettings/notificationSettings';

AppRegistry.registerComponent(appName, () => NotificationSettings);
