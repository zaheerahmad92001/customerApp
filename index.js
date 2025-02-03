/**
 * @format
 */
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './App';
//import ChatListView from './src/screens/chat_module/Chats_ListScreen';
import ChatListView from './src/screens/chat_module/Chats_ListScreen';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => ChatListView);
