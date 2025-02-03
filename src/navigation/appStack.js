// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomStack from './bottomTabs/bottomStack';
import NotificationStack from './notificationStack';
import FavouriteStack from './favouriteStack';
import SuccessScreen from '../screens/successMessageScreen/succesScreen';
import Categories from '../screens/categoriesScreen/categories';
import CategoryListing from '../screens/categoryListing/categoryListing';
import EditProfile from '../screens/profileScreen/editProfile/editProfile';
import ReviewScreen from '../screens/reviewScreen/review';
import Favorites from '../screens/favoritesScreen/favourites';
import BookingHistory from '../screens/bookingScreen/booking';
import SavedCard from '../screens/cardScreen/savedCard/card';
import AddCard from '../screens/cardScreen/addCard/addCard';
import Invoice from '../screens/invoiceScreen/invoiceDetail/invoiceDetail';
import InvoiceList from '../screens/invoiceScreen/invoiceList/invoiceList';
import Settings from '../screens/settingScreen/settings/settings';
import Language from '../screens/languageScreen/language/language';
import NotificationSetting from '../screens/notificationSettingsScreen/notificationSetting';
import ChangePassword from '../screens/changePasswordScreen/changePassword';

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
    </Stack.Navigator>
  );
}
export default AppStack;
