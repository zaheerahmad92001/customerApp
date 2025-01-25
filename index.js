/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PrivacyPolicy from './src/screens/privacyPolicyScreen/privacyPolicy/privacyPolicy';

AppRegistry.registerComponent(appName, () => PrivacyPolicy);
