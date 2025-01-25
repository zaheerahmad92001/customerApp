/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TermCondition from './src/screens/termConditionScreen/termCondition/termCondition';

AppRegistry.registerComponent(appName, () => TermCondition);
