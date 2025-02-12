import { View, SafeAreaView, Text, Pressable } from 'react-native';
import React, { useRef, useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { SmallText, XlargeText } from '../../components/Typography';
import styles from './signUp.Style';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { AppButton } from '../../components/appButton';
import TextField from '../../components/textField/textField';
import { Checkbox } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import Header from '../../components/appHeader';
import DownArrow from '../../assets/svgs/downarrow.svg';

const SignUp = ({ navigation, route }) => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <Header title={'Sign Up'} showBackButton onBackPress={() => navigation.goBack()}></Header>
      <View style={styles.mainContainer}>
        <XlargeText text={'Create your Account!'} style={styles.heading} />
        <SmallText text={'Phone Number'} style={styles.label} />
        {console.log('phoneNumber', phoneNumber, 'countryCode', countryCode)}

        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="SA"
          layout="first"
          placeholder="Enter your phone number"
          disableCountryCode={true}
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          onChangeFormattedText={text => setFormattedValue(text)}
          onChangeCountry={country => setCountryCode(country.callingCode)}
          withShadow={false}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
          flagButtonStyle={styles.flagButton}
          textInputProps={{
            placeholderTextColor: colors.lightBlack,
            fontFamily: fontsFamily.regular,
            fontSize: RFValue(12),
            style: { paddingLeft: 0, marginLeft: -20, textAlign: "left" }
          }}
          renderDropdownImage={
            <DownArrow />
          }
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
          <View style={styles.termViews}>
            <Text style={styles.termsText}>
              I agree to the anaqq{" "}
              <Text style={styles.privacyPolicyText}>
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text style={styles.privacyPolicyText}>
                Privacy Policy
              </Text>
            </Text>
          </View>

        </View>

        <AppButton
          title={'Sign Up'}
          disabled={!isChecked}
          style={styles.signUpButton}
          textstyle={styles.signUpText}
          onPress={() => navigation.navigate('otpView')}
        />

        <View style={styles.loginTextContainer}>
          <SmallText
            text={'Already have an account?'}
            style={styles.headingAcc}
          />
          <Pressable onPress={() => navigation.navigate('login')}>
            <SmallText text={'Sign in'} style={styles.subHeadingAcc} />
          </Pressable>
        </View>

      </View>

    </SafeAreaView>
  );
};



export default SignUp;
