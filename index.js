/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AvailableTimeSlot from './src/screens/availableTimeSlotScreen/availableTimeSlot/availableTimeSlot';

AppRegistry.registerComponent(appName, () => AvailableTimeSlot);
