/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Categories from './src/screens/categoriesScreen/categories/categories';

AppRegistry.registerComponent(appName, () => Categories);
