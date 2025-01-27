import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import Header from '../../../components/appHeader';
import ToggleSwitch from '../../../components/toggleSwitch/toggleSwitch';
import {toggleItems} from '../../../staticData';

const NotificationSettings = () => {
  const [toggles, setToggles] = useState(toggleItems);

  const handleToggle = id => {
    const updatedToggles = toggles.map(item =>
      item.id === id ? {...item, isEnabled: !item.isEnabled} : item,
    );
    setToggles(updatedToggles);
  };
  return (
    <View style={styles.container}>
      <Header title={'Notification Settings'} showBackButton />
      <Text style={styles.heading}>Settings</Text>
      <FlatList
        data={toggles}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ToggleSwitch
            label={item.label}
            isEnabled={item.isEnabled}
            onToggle={() => handleToggle(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    marginBottom: 10,
  },
});

export default NotificationSettings;
