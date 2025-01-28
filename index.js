/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Favorites from './src/screens/favoritesScreen/favourites';

AppRegistry.registerComponent(appName, () => Favorites);
