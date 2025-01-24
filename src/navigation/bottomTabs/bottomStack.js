import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';
import images from '../../assets/images';

const Tab = createBottomTabNavigator();

// Sample screens for the tabs
const HomeScreen = () => (
  <View style={styles.screen}>
    <Text>Home Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text>Settings Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text>Profile Screen</Text>
  </View>
);

const NotificationsScreen = () => (
  <View style={styles.screen}>
    <Text>Notifications Screen</Text>
  </View>
);

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
              <FastImage
                style={styles.tabIcon}
                source={TAB_ICONS[route.name]}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <Text style={[styles.tabLabel, { color: isFocused ? 'tomato' : 'gray' }]}>
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Booking" component={SettingsScreen} />
      <Tab.Screen name="Messages" component={ProfileScreen} />
      <Tab.Screen name="More" component={NotificationsScreen} />
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
    backgroundColor: '#D3D3D3',
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
