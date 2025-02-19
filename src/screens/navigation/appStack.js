import * as React from 'react';
import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'; // Ensure you have this installed

import AppIntro from '../appIntroScreen/appIntro';
import BottomStack from './bottomTabs/bottomStack';
import NotificationStack from './notificationStack';
import AuthStack from './authStack';
import Categories from '../categoriesScreen/categories';
import CategoryListing from '../categoryProducts/categoryProducts';
import EditProfile from '../profileScreen/editProfile/editProfile';
import ReviewScreen from '../reviewScreen/review';
import Favorites from '../favoritesScreen/favourites';
import Booking from '../bookingScreen/booking';
import BookingHistory from '../bookingHistoryScreen/bookingHistory';
import SavedCard from '../cardScreen/savedCard/saveCard';
import AddCard from '../cardScreen/addCard/addCard';
import InvoiceDetail from '../invoiceScreen/invoiceDetail/invoiceDetail';
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
import SuccessScreen from '../successMessageScreen/succesScreen';
import ServiceDetail from '../serviceDetailScreen/serviceDetail';
import Location from '../location/location';
import RatingAndReview from '../ratingAndReviewScreen/ratingAndReview';
import AvailableTimeSlot from '../availableTimeSlotScreen/availableTimeSlot';
import OrderDetail from '../orderDetailScreen/orderDetail';
import VenueList from '../venueListScreen/venueList';

const Stack = createNativeStackNavigator();

const IntroStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppIntro" component={AppIntro} />
    </Stack.Navigator>
  );
};

function AppStack() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setIsAppReady(true);
      SplashScreen.hide();
    },500);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="IntroStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="IntroStack" component={IntroStack} />
      <Stack.Screen name="authStack" component={AuthStack} />
      <Stack.Screen name="BottomStack" component={BottomStack} />
      <Stack.Screen name="location" component={Location} />
      <Stack.Screen name="notificationStack" component={NotificationStack} />
      <Stack.Screen name="successScreen" component={SuccessScreen} />
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="categoryProducts" component={CategoryListing} /> 
      <Stack.Screen name="favorites" component={Favorites} />
      <Stack.Screen name="editProfile" component={EditProfile} />
      <Stack.Screen name="booking" component={Booking} />
      <Stack.Screen name="bookingHistory" component={BookingHistory} />
      <Stack.Screen name="review" component={ReviewScreen} />
      <Stack.Screen name="addCard" component={AddCard} />
      <Stack.Screen name="savedCard" component={SavedCard} />
      <Stack.Screen name="invoiceList" component={InvoiceList} />
      <Stack.Screen name="invoiceDetail" component={InvoiceDetail} />
      <Stack.Screen name="complaints" component={Complaints} />
      <Stack.Screen name="addNewComplaint" component={AddNewComplaint} />
      <Stack.Screen name="complaintDetail" component={ComplaintDetail} />
      <Stack.Screen name="chat" component={Chat} />
      <Stack.Screen name="loyaltyPoints" component={LoyaltyPoints} />
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen name="language" component={Language} />
      <Stack.Screen name="notificationSetting" component={NotificationSetting} />
      <Stack.Screen name="changePassword" component={ChangePassword} />
      <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="termsCondition" component={TermCondition} />
      <Stack.Screen name="deleteAccount" component={DeleteAccount} />
      <Stack.Screen name="customerSupport" component={Support} />
      <Stack.Screen name="inviteFriends" component={InviteFriends} />
      <Stack.Screen name="detail" component={ServiceDetail} />
      <Stack.Screen name="ratingAndReview" component={RatingAndReview} />
      <Stack.Screen name="availableTimeSlot" component={AvailableTimeSlot} />
      <Stack.Screen name="orderDetail" component={OrderDetail} />
      <Stack.Screen name="VenueList" component={VenueList} />
    </Stack.Navigator>
  );
}
export default AppStack;