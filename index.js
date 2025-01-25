/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoyaltyPoints from './src/screens/loyaltyPointsScreen/loyaltyPoints/loyaltyPoints';

AppRegistry.registerComponent(appName, () => LoyaltyPoints);
