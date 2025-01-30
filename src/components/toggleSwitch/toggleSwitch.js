import React, {useState} from 'react';
import {View, Switch, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MediumText } from '../Typography';

const ToggleSwitch = ({label, isEnabled, onToggle}) => {
  const [toggleAnim] = useState(new Animated.Value(isEnabled ? 1 : 0));

  const handleToggle = () => {
    Animated.timing(toggleAnim, {
      toValue: isEnabled ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onToggle();
  };

  const thumbPosition = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 20],
  });

  const trackColor = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#e4e4e4', colors.primary],
  });

  return (
    <View style={styles.container}>
      <MediumText text={label} style={styles.label}/>
      <TouchableOpacity onPress={handleToggle} activeOpacity={0.7}>
        <Animated.View style={[styles.track, {backgroundColor: trackColor}]}>
          <Animated.View
            style={[styles.thumb, {transform: [{translateX: thumbPosition}]}]}
          />
        </Animated.View>
      </TouchableOpacity>

      {/* <Switch
        trackColor={{ false: colors.inputGray, true: colors.primary }}
        thumbColor={isEnabled ? colors.white : colors.white}
        ios_backgroundColor={colors.lightGray}
        onValueChange={handleToggle}
        value={isEnabled}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
     paddingVertical:hp(1.8),
    paddingHorizontal: 15,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    marginVertical: 5,
  },
  label: {
    color: colors.lightBlack,
    fontFamily: fontsFamily.extraLight,
  },
  track: {
    width: 45,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
    padding: 2,
  },
  thumb: {
    width: 18,
    height: 18,
    backgroundColor: '#fff',
    borderRadius: 18 / 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 6,
  },
});

export default ToggleSwitch;
