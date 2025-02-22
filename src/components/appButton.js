import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import colors from '../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../assets/fontsFamily';

const AppButton = props => {
  const {onPress, title, style, textstyle} = props;
  return (
    <Pressable onPress={onPress} style={[styles.wrapper, style]}>
      <Text style={[styles.buttonText, textstyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
    borderColor: colors.primary,
    borderWidth: 1,
    marginTop: 'auto',
  },
  buttonText: {
    color: colors.white,
    fontSize: RFValue(Platform.OS==='android'? 15: 13), // Updated to RFValue
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: fontsFamily.regular,
  },
});
export {AppButton};
