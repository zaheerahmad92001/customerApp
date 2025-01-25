/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Language from './src/screens/languageScreen/language/language';

AppRegistry.registerComponent(appName, () => Language);
