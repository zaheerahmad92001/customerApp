/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import InvoicesDetail from './src/screens/invoiceScreen/allInovicesDetails/invoicesDetail';

AppRegistry.registerComponent(appName, () => InvoicesDetail);
