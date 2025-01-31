import {View, SafeAreaView, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {SmallText, XlargeText} from '../../../components/Typography';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AppButton} from '../../../components/appButton';
import TextField from '../../../components/textField/textField';
import {Checkbox} from 'react-native-paper';

const SignUp = () => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <XlargeText text={'Create your Account!'} style={styles.heading} />
      <SmallText text={'Phone Number'} style={styles.label} />
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="SA"
        layout="first"
        placeholder="Enter your phone number"
        onChangeFormattedText={text => setFormattedValue(text)}
        onChangeCountry={country => setCountryCode(country.callingCode)}
        withShadow
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        flagButtonStyle={styles.flagButton}
        textInputProps={{
          placeholderTextColor: colors.lightBlack,
          fontFamily: fontsFamily.regular,
          fontSize: RFValue(12),
        }}
      />

      <View style={styles.nameContainer}>
        <TextField
          label={'First Name'}
          placeholder={'Enter your first name'}
          style={[styles.inputFields, styles.halfWidth]}
        />
        <TextField
          label={'Last Name'}
          placeholder={'Enter your last name'}
          style={[styles.inputFields, styles.halfWidth]}
        />
      </View>
      <TextField
        label={'Email (Optional)'}
        placeholder={'Enter your email'}
        style={styles.inputFields}
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!isChecked)}
          color={colors.primary}
        />
        <SmallText
          text={'I agree to the anaqa Terms of Service and Privacy Policy'}
          style={styles.termsText}
        />
      </View>

      <AppButton
        title={'Sign Up'}
        disabled={!isChecked}
        style={styles.signUpButton}
        textstyle={styles.signUpText}
      />

      <View style={styles.loginTextContainer}>
        <SmallText
          text={'Already have an account?'}
          style={styles.headingAcc}
        />
        <SmallText text={'Sign in'} style={styles.subHeadingAcc} />
      </View>
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
    fontSize: RFValue(20),
    fontFamily: fontsFamily.bold,
    marginTop: hp(5),
  },
  label: {
    color: colors.appBlack,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    marginTop: hp(2),
    marginBottom: 10,
  },
  phoneContainer: {
    width: '100%',
    height: 40,
  },
  textInput: {
    paddingVertical: 0,
    backgroundColor: colors.inputGray,
    color: colors.appBlack,
  },
  flagButton: {
    backgroundColor: colors.inputGray,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  halfWidth: {
    width: '48%',
  },
  inputFields: {
    marginTop: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  termsText: {
    marginLeft: 10,
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    width: wp(75),
  },
  signUpButton: {
    backgroundColor: colors.primary,
    marginVertical: 10,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
  signUpText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
  loginTextContainer: {
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
});

export default SignUp;
