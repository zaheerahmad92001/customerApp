import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install react-native-vector-icons
import FastImage from 'react-native-fast-image';

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

// Custom Tab Bar Component
const CustomTabBar = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.tabBarContainer}>
      {props.state.routes.map((route, index) => {
        const isFocused = index === props.state.index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && event.defaultPrevented === false) {
            props.navigation.navigate(route.name);
          }
        };

        return (
            <View>
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabButton]}
          >
            <View style={[styles.inActiveTab, isFocused && styles.activeTab]}>
            <FastImage
            style={{ width: 30, height: 30 }}
            source={{
                uri: 'https://unsplash.it/400/400?image=1',
                headers: { Authorization: 'someAuthToken' },
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}/>
            </View>
          </TouchableOpacity>
          <View style={styles.inActiveTab}>
          <Text style={{ color: isFocused ? 'tomato' : 'gray' }}>{route.name}</Text>
          </View>
          </View>
        );
      })}
    </View>
    </View>
  );
};

const BottomStack = () => {
  return (
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false, // Hide the header if you want
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Messages" component={NotificationsScreen} />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5, // Optional: for shadow effect on Android
  },
  tabButton: {
    // flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    // padding: 10,
  },
  inActiveTab: {
    backgroundColor: 'white', // Light red background for active tab
    borderRadius: 15,
    // padding:10,
    width:70,
    justifyContent:'center',
    alignItems:'center',
  },

  activeTab: {
    backgroundColor: '#D3D3D3', // Light red background for active tab
    borderRadius: 15,
    // padding:10,
    width:70,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default BottomStack;