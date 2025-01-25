import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/appHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import PasswordInput from '../../components/passwordInput/passwordInput';

const ChangePassword = () => {
  const [password, setPassword] = useState('');

  const handleChangePassword = () => {
    // Handle the change password action here
    console.log('Change Password Button Pressed');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Change Password'} showBackButton />
      <Text style={styles.heading}>Please Enter your current password</Text>

      <PasswordInput
        label="Current Password"
        placeholder="Enter your password"
        onChange={text => setPassword(text)}
      />

      <Text style={styles.heading}>Create a new password</Text>

      <PasswordInput
        label="New Password"
        placeholder="Enter your password"
        onChange={text => setPassword(text)}
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Enter your password"
        onChange={text => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  heading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginBottom: 10,
  },
  button: {
    marginTop: 'auto',
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.white,
  },
});

export default ChangePassword;
