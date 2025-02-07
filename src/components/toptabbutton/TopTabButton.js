import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import OnlineUser from "./onlineUser";
import Receiver from "./receiver";
import Sender from "./sender";
import { colors, fonts, fontSizes } from "@constants/constants";

const FirstRoute = () => <OnlineUser />;
const SecondRoute = () => <Receiver />;
const ThirdRoute = () => <Sender />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

// ✅ Custom TabBar Component
const MyTabBar = ({ navigationState, position, jumpTo }) => {
  return (
    <View style={styles.tabBar}>
      {navigationState.routes.map((route, index) => {
        const isActive = navigationState.index === index;

        return (
          <TouchableOpacity key={route.key} onPress={() => jumpTo(route.key)} style={styles.tab}>
            <Text style={[styles.label, isActive && styles.activeLabel]}>{route.title}</Text>
            {isActive && <View style={styles.indicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function TopTabView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Online User" },
    { key: "second", title: "Receivers" },
    { key: "third", title: "Sender" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => <MyTabBar {...props} />} // ✅ Using Custom TabBar
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    paddingTop:5,
    // paddingBottom:10,
    // paddingVertical: 10,
    borderBottomWidth:1,
    borderBottomColor: colors.lightGray,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    color: colors.black,
    fontFamily:fonts.regular,
    fontSize:fontSizes.lg,
    fontWeight:'700',
  },
  activeLabel: {
    color: colors.appRed,
    fontFamily:fonts.regular,
    fontSize:fontSizes.lg,
    fontWeight:'700',
  },
  indicator: {
    width: "60%",
    marginTop:8,
    height: 2,
    backgroundColor:colors.appRed, // Indicator color
    borderRadius: 2,
  },
});