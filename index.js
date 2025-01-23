/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NotificationInvoice from './src/screens/notifications/notificationInvoice/notificationInvoice';

AppRegistry.registerComponent(appName, () => NotificationInvoice);
