/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CustomerSupport from './src/screens/customerSupportScreen/customerSupport/customerSupport';

AppRegistry.registerComponent(appName, () => CustomerSupport);
