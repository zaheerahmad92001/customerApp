/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import addComplaintScreen from './src/screens/complaints/AddNewRequest/AddNewRequestScreen';

AppRegistry.registerComponent(appName, () => addComplaintScreen);
