import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const ReasonSelector = ({label, onSelect, selected}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(label)}>
      <View style={[styles.radioCircle, selected && styles.selected]}>
        {selected && <View style={styles.radioCircleInner} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    paddingVertical: 10,
    // paddingHorizontal: 15,
    borderRadius: 5,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.radioBorders,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioCircleInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  selected: {
    borderColor: colors.primary,
  },
  label: {
    fontSize: RFValue(14),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
  },
});

export default ReasonSelector;
