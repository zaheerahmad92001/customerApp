/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BookedSuccess from './src/screens/bookedSuccessScreen/bookedSuccess/bookedSuccess';

AppRegistry.registerComponent(appName, () => BookedSuccess);
