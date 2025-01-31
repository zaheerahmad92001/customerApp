import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';
import images from '../../assets/images';
import SearchScreen from '../../screens/searchScreen/search/search';
import ReviewScreen from '../../screens/reviewScreen/review/review';
import ProfileScreen from '../../screens/profileScreen/profile/profile';
import EditProfile from '../../screens/profileScreen/editProfile/editProfile';
import Favorites from '../../screens/favoritesScreen/favourites';
import BookingHistory from '../../screens/bookingHistoryScreen/bookingHistory';

import colors from '../../assets/colors';

const Tab = createBottomTabNavigator();


// Image source mapping for each tab
const TAB_ICONS = {
  Home: images.homeTab,
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
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
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
      <Tab.Screen name="Home" component={SearchScreen} />
      <Tab.Screen name="Booking" component={ReviewScreen} />
      <Tab.Screen name="Messages" component={ProfileScreen} />
      <Tab.Screen name="More" component={BookingHistory} />
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
