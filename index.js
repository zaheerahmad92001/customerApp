/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ChangePassword from './src/screens/changePasswordScreen/changePassword';

AppRegistry.registerComponent(appName, () => ChangePassword);
