// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomStack from './bottomTabs/bottomStack';
import NotificationStack from './notificationStack';
import FavouriteStack from './favouriteStack';
import SuccessScreen from '../successMessageScreen/succesScreen';
import Categories from '../categoriesScreen/categories';
import CategoryListing from '../categoryListing/categoryListing';
import EditProfile from '../profileScreen/editProfile/editProfile';
import ReviewScreen from '../reviewScreen/review';
import Favorites from '../favoritesScreen/favourites';
import BookingHistory from '../bookingScreen/booking';
import SavedCard from '../cardScreen/savedCard/card';
import AddCard from '../cardScreen/addCard/addCard';
import invoiceDetail from '../invoiceScreen/invoiceDetail/invoiceDetail';
import InvoiceList from '../invoiceScreen/invoiceList/invoiceList';
import Complaints from '../complaintsScreens/complaints';
import AddNewComplaint from '../addNewRequest/addNewComplaint';
import ComplaintDetail from '../complaintDetail/complaintDetail';
import Settings from '../settingScreen/settings/settings';
import Language from '../languageScreen/language/language';
import NotificationSetting from '../notificationSettingsScreen/notificationSetting';
import ChangePassword from '../changePasswordScreen/changePassword';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomStack" component={BottomStack} />
      <Stack.Screen name="notificationStack" component={NotificationStack} />
      <Stack.Screen name="successScreen" component={SuccessScreen} />
      <Stack.Screen name="categories" component={Categories}/>
      <Stack.Screen name="categoryListing" component={CategoryListing}/>
      <Stack.Screen name="favorites" component={Favorites} />
      <Stack.Screen name="editProfile" component={EditProfile}/>
      <Stack.Screen name="booking" component={BookingHistory}/>
      <Stack.Screen name="review" component={ReviewScreen}/>
      <Stack.Screen name="addCard" component={AddCard}/>
      <Stack.Screen name="savedCard" component={SavedCard}/>
      <Stack.Screen name="invoiceList" component={InvoiceList}/>
      <Stack.Screen name="invoiceDetail" component={invoiceDetail}/>
      <Stack.Screen name="complaints" component={Complaints}/>
      <Stack.Screen name='addNewComplaint' component={AddNewComplaint}/>
      <Stack.Screen name='complaintDetail' component={ComplaintDetail}/>
    </Stack.Navigator>
  );
}
export default AppStack;
