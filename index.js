/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Faq from './src/screens/faqScreen/faq/faq';

AppRegistry.registerComponent(appName, () => Faq);
