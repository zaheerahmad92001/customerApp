import React, {useReducer, useRef} from 'react';
import {View, SafeAreaView, Keyboard} from 'react-native';
import Header from '../../../components/appHeader';
import TextField from '../../../components/textField/textField';
import styles from './addcard.styles';
import {LargeText} from '../../../components/Typography';
import {AppButton} from '../../../components/appButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ToggleSwitch from '../../../components/toggleSwitch/toggleSwitch';

const AddCard = ({navigation, route}) => {
  const {isNew} = route.params || {};
  const cardNumRef = useRef(null);
  const cardHolderRef = useRef(null);
  const expiryRef = useRef(null);
  const ccvRef = useRef(null);

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      cardNumber: null,
      cardHolderName: null,
      expiryDate: null,
      cvv: null,
      saveMethod: false,
    },
  );
  const {cardHolderName, cardNumber, expiryDate, cvv, saveMethod} = state;

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={isNew ? 'Payment Method' : 'Add Card'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView style={{flex:1}}>
        <View style={styles.container}>
          <LargeText
            text={isNew ? 'Add New Card' : 'Card Details'}
            style={styles.heading}
          />

          <TextField
            ref={cardNumRef}
            label={'Card Number'}
            placeholder="2546-5521-2165-2259"
            value={cardNumber}
            onChangeText={num => {
              updateState({cardNumber: num});
            }}
            keyboardType="number-pad"
            returnKeyType="next"
            onSubmitEditing={() => {
              cardHolderRef.current.focus();
            }}
            blurOnSubmit={false}
            style={styles.inputStyle}
          />

          <TextField
            ref={cardHolderRef}
            label={'Card Holder Name'}
            placeholder="Kaylynn Kenter"
            value={cardHolderName}
            onChangeText={name => {
              updateState({cardHolderName: name});
            }}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {
              expiryRef.current.focus();
            }}
            blurOnSubmit={false}
            style={styles.inputStyle}
          />

          <TextField
            ref={expiryRef}
            label={'Expiry'}
            value={expiryDate}
            placeholder="07/26"
            onChangeText={exp => {
              updateState({expiryDate: exp});
            }}
            keyboardType="number-pad"
            returnKeyType="next"
            onSubmitEditing={() => {
              ccvRef.current.focus();
            }}
            blurOnSubmit={false}
            style={styles.inputStyle}
          />

          <TextField
            ref={ccvRef}
            label={'CVV Code'}
            value={cvv}
            placeholder="056"
            onChangeText={cvv => {
              updateState({cvv: cvv});
            }}
            keyboardType="number-pad"
            returnKeyType="done"
            blurOnSubmit={true}
            onSubmitEditing={() => Keyboard.dismiss()}
            style={styles.inputStyle}
          />
          {isNew && (
            <ToggleSwitch
              label={'Save Method'}
              isEnabled={saveMethod}
              onToggle={() => updateState({saveMethod: !saveMethod})}
            />
          )}
        </View>
      
      </KeyboardAwareScrollView>
      <AppButton title={isNew? 'Done': 'Save Card'} onPress={() => {}} style={styles.button} />
    </SafeAreaView>
  );
};

export default AddCard;
