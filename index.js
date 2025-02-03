/**
 * @format
 */
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AvailableTimeSlot from './src/screens/availableTimeSlotScreen/availableTimeSlot/availableTimeSlot';
import OrderDetail from './src/screens/orderDetailScreen/orderDetail/orderDetail';

AppRegistry.registerComponent(appName, () => OrderDetail);
