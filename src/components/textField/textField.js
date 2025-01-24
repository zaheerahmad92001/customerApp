import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const TextField = ({label, placeholder, style, inputStyle, ...props}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={colors.appBlack}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    fontFamily: fontsFamily.medium,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 15,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    backgroundColor: colors.inputGray,
    width: '100%',
    color: colors.lightBlack,
  },
});

export default TextField;
