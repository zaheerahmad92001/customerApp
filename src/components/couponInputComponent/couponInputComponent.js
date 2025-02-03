import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const CouponInput = ({onApply}) => {
  const [coupon, setCoupon] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Coupon Code</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Coupon Code"
          placeholderTextColor="#A0A0A0"
          value={coupon}
          onChangeText={setCoupon}
        />
        <TouchableOpacity
          style={[styles.applyButton, !coupon && styles.disabledButton]}
          onPress={() => onApply(coupon)}
          disabled={!coupon}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.inputGray,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: colors.appBlack,
  },
  applyButton: {
    backgroundColor: '#E57373',
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  disabledButton: {
    backgroundColor: colors.gray,
  },
  applyText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
});

export default CouponInput;
