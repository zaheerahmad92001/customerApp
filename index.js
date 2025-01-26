/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NearbyVenue from './src/screens/nearbyVenueScreen/nearbyVenue/nearbyVenue';

AppRegistry.registerComponent(appName, () => NearbyVenue);
