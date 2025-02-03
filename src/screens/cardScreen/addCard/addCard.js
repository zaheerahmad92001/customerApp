import React, {useReducer} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Header from '../../../components/appHeader';
import TextField from '../../../components/textField/textField';
import styles from './addcard.styles';
import {LargeText, XlargeText} from '../../../components/Typography';
import { AppButton } from '../../../components/appButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddCard = ({navigation, route}) => {
  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      cardNumber: null,
      cardHolderName: null,
      expiryDate: null,
      cvv: null,
    },
  );
  const {cardHolderName, cardNumber, expiryDate, cvv} = state;

  return (
    <SafeAreaView style={styles.wrapper}>
        <Header title={'Add Card'} showBackButton onBackPress={()=>navigation.goBack()} />
      <KeyboardAwareScrollView>
      <View style={styles.container}>
        <LargeText text="Card Details" style={styles.heading} />

        <TextField
          label={'Card Number'}
          placeholder="2546-5521-2165-2259"
          onChangeText={num => {
            updateState({cardNumber: num});
          }}
          keyboardType="number-pad"
          style={styles.inputStyle}
        />

        <TextField
          label={'Card Holder Name'}
          placeholder="Kaylynn Kenter"
          onChangeText={name => {
            updateState({cardHolderName: name});
          }}
          keyboardType="default"
          style={styles.inputStyle}
        />

        <TextField
          label={'Expiry'}
          placeholder="07/26"
          onChangeText={exp => {
            updateState({expiryDate: exp});
          }}
          keyboardType="number-pad"
          style={styles.inputStyle}
        />

        <TextField
          label={'CVV Code'}
          placeholder="056"
          onChangeText={cvv => {
            updateState({cvv: cvv});
          }}
          keyboardType="number-pad"
          style={styles.inputStyle}
        /> 
       <AppButton title="Save Card" onPress={()=>{}} style={styles.button} />
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddCard;
