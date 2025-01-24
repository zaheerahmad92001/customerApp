import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import Header from '../../../components/appHeader';
import TextField from '../../../components/textField/textField';
import {RFValue} from 'react-native-responsive-fontsize';

const AddCard = () => {
  return (
    <View style={styles.container}>
      <Header title={'Add Card'} showBackButton />
      <Text style={styles.heading}>Card Details</Text>

      <TextField label={'Card Number'} placeholder="2546-5521-2165-2259" />

      <TextField label={'Card Holder Name'} placeholder="Kaylynn Kenter" />

      <TextField label={'Expiry'} placeholder="07/26" />

      <TextField label={'CVV Code'} placeholder="056" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    color: colors.white,
  },
});

export default AddCard;
