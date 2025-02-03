import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';
import images from '../../assets/images';
import HomeStack from '../homeStack';
import ProfileScreen from '../../screens/profileScreen/profile/profile';
import EditProfile from '../../screens/profileScreen/editProfile/editProfile';
import Booking from '../../screens/bookingScreen/booking';
import Card from '../../screens/cardScreen/savedCard/card';
import AddCard from '../../screens/cardScreen/addCard/addCard';
import Invoice from '../../screens/invoiceScreen/invoiceDetail/invoiceDetail';
import InvoiceList from '../../screens/invoiceScreen/invoiceList/invoiceList';
import Settings from '../../screens/settingScreen/settings/settings';
import Language from '../../screens/languageScreen/language/language';
import NotificationSetting from '../../screens/notificationSettingsScreen/notificationSetting';
import ChangePassword from '../../screens/changePasswordScreen/changePassword';


import colors from '../../assets/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



// Image source mapping for each tab
const TAB_ICONS = {
  homeStack: images.homeTab,
  Booking:images.bookingTab,
  Messages:images.messageTab,
  More:images.moreTab 
};

// Custom Tab Bar Component
const CustomTabBar = (props) => {
  return (
    <View style={styles.tabBarContainer}>
      {props.state.routes.map((route, index) => {
        const isFocused = index === props.state.index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <View
              style={[
                styles.tabIconContainer,
                isFocused && styles.activeTabBackground,
              ]}
            >
              <Image
                style={[styles.tabIcon, { tintColor: isFocused ? colors.primary : 'gray' }]}
                source={TAB_ICONS[route.name]}
                // resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <Text style={[styles.tabLabel, { color: isFocused ? colors.primary : 'gray' }]}>
              {route.name==='homeStack' ? 'Home' : route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MoreStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="editProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

const BottomStack = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="homeStack" component={HomeStack} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Messages" component={ProfileScreen} />
      <Tab.Screen name="More" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor:'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingBottom:10,

  },
  tabButton: {
    alignItems: 'center',
    justifyContent:'center',
  },
  tabIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  activeTabBackground: {
    backgroundColor: colors.lightPrimary,
  },
  tabIcon: {
    width: 40,
    height: 40,
  },
  tabLabel: {
    fontSize: 12,
    // marginTop: 5,
  },
});

export default BottomStack;
