import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const TextField = ({label, placeholder, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
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
    color: '#666',
    fontFamily: fontsFamily.regular,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize:RFValue(12),
    backgroundColor: colors.inputGray,
  },
});

export default TextField;
