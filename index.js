/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Reward from './src/screens/rewardScreen/reward/reward';

AppRegistry.registerComponent(appName, () => Reward);
