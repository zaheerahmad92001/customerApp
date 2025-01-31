import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {SmallText, XlargeText} from '../../../components/Typography';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AppButton} from '../../../components/appButton';

const Login = () => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <XlargeText text={'Welcome to ANAQA'} style={styles.heading} />
      <SmallText
        text={
          'Login or create an account to book and manage your appointments.'
        }
        style={styles.subHeading}
      />
      <SmallText text={'Enter Phone Number'} style={styles.label} />
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="US"
        layout="first"
        onChangeFormattedText={text => setFormattedValue(text)}
        onChangeCountry={country => {
          return setCountryCode(country.callingCode);
        }}
        withShadow
        placeholder="Enter your phone number"
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        flagButtonStyle={styles.flagButton}
        textInputProps={{
          placeholderTextColor: colors.lightBlack,
          fontFamily: fontsFamily.regular,
          fontSize: RFValue(12),
        }}
      />

      <AppButton title={'Done'} />

      <View style={styles.registerTextContainer}>
        <SmallText text={"Don't have an account?"} style={styles.headingAcc} />
        <SmallText text={'Register Here'} style={styles.subHeadingAcc} />
      </View>
      <SmallText text={'Need Help?'} style={styles.helpText} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: RFValue(18),
    fontFamily: fontsFamily.bold,
    marginTop: hp(5),
  },
  subHeading: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },
  label: {
    color: colors.appBlack,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    marginTop: hp(4),
    marginBottom: 10,
  },
  phoneContainer: {
    width: '100%',
    height: 40,
  },
  textInput: {
    paddingVertical: 0,
    backgroundColor: colors.inputGray,
  },
  flagButton: {
    backgroundColor: colors.inputGray,
  },
  registerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  headingAcc: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },
  subHeadingAcc: {
    fontSize: RFValue(12),
    color: colors.primary,
    fontFamily: fontsFamily.regular,
    marginLeft: 5,
  },
  helpText: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    marginLeft: 5,
    textAlign: 'center',
    marginBottom: hp(3),
  },
});

export default Login;
