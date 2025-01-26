/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PaymentMethod from './src/screens/paymentMethodScreen/paymentMethod/paymentMethod';

AppRegistry.registerComponent(appName, () => PaymentMethod);
