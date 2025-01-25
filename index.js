/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CodeDiscount from './src/screens/codeDiscountScreen/codeDiscount/codeDiscount';

AppRegistry.registerComponent(appName, () => CodeDiscount);
