// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomStack from './bottomTabs/bottomStack';
import NotificationStack from './notificationStack';
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
import LoyaltyPoints from '../loyaltyPointsScreen/loyaltyPoints';
import Settings from '../settingScreen/settings';
import Chat from '../chatView/chatView';
import Language from '../languageScreen/language';
import NotificationSetting from '../notificationSettingsScreen/notificationSetting';
import ChangePassword from '../changePasswordScreen/changePassword';
import PrivacyPolicy from '../privacyPolicyScreen/privacyPolicy';
import TermCondition from '../termConditionScreen/termCondition';
import DeleteAccount from '../deleteAccountScreen/deleteAccount';

import Support from '../supportScreen';
import InviteFriends from '../inviteFriends/inviteFriends';

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
      <Stack.Screen name="addNewComplaint" component={AddNewComplaint}/>
      <Stack.Screen name="complaintDetail" component={ComplaintDetail}/>
      <Stack.Screen name="Chat" component={Chat}/>
      <Stack.Screen name="loyaltyPoints" component={LoyaltyPoints}/>
      <Stack.Screen name="settings" component={Settings}/>
      <Stack.Screen name="language" component={Language}/>
      <Stack.Screen name="notificationSetting" component={NotificationSetting}/>
      <Stack.Screen name="changePassword" component={ChangePassword}/>
      <Stack.Screen name="privacyPolicy" component={PrivacyPolicy}/>
      <Stack.Screen name="termsCondition" component={TermCondition}/>
      <Stack.Screen name="deleteAccount" component={DeleteAccount}/>
      <Stack.Screen name="customerSupport" component={Support}/>
      <Stack.Screen name="inviteFriends" component={InviteFriends}/>


    </Stack.Navigator>
  );
}
export default AppStack;
