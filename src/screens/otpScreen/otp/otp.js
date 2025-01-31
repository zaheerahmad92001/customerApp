import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {SmallText, XlargeText} from '../../../components/Typography';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AppButton} from '../../../components/appButton';

const OtpView = () => {
  const [otp, setOtp] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <XlargeText text={'Verify Your Identity'} style={styles.heading} />
      <SmallText
        text={'We’ve sent a 4-digit code to 071*****05 Please enter it below.'}
        style={styles.subHeading}
      />

      <OTPInputView
        style={styles.otpContainer}
        pinCount={4}
        autoFocusOnLoad
        code={otp}
        onCodeChanged={setOtp}
        codeInputFieldStyle={styles.otpInput}
        codeInputHighlightStyle={styles.otpInputHighlight}
      />

      <View style={styles.registerTextContainer}>
        <SmallText text={'Time Left:'} style={styles.headingAcc} />
        <SmallText text={'00:10'} style={styles.subHeadingAcc} />
      </View>

      <View style={styles.resendContainer}>
        <SmallText text={'Didn’t receive a code?'} style={styles.headingAcc} />
        <SmallText text={'Resend'} style={styles.subHeadingAcc} />
      </View>

      <AppButton title={'Done'} />
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
  otpContainer: {
    width: '75%',
    height: 50,
    alignSelf: 'center',
    marginTop: hp(6),
  },
  otpInput: {
    width: 55,
    height: 60,
    borderWidth: 1,
    borderColor: colors.gray,
    color: colors.appBlack,
    backgroundColor: colors.inputGray,
    borderRadius: 5,
  },
  otpInputHighlight: {
    borderColor: colors.gray,
  },
  registerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    marginTop: hp(6),
  },
  resendContainer: {
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

export default OtpView;
