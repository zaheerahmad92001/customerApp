/**
 * @format
 */
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './App';
//import ChatListView from './src/screens/chat_module/Chats_ListScreen';
//import ChatListView from './src/screens/chat_module/Chats_ListScreen';
import ChatViewScreen from './src/screens/chat_module/ChatView/ChatView';
import {name as appName} from './app.json';
import AvailableTimeSlot from './src/screens/availableTimeSlotScreen/availableTimeSlot/availableTimeSlot';
import OrderDetail from './src/screens/orderDetailScreen/orderDetail/orderDetail';

AppRegistry.registerComponent(appName, () => OrderDetail);
