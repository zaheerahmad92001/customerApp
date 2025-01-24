import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import TextField from '../../../components/textField/textField';
import colors from '../../../assets/colors';
import images from '../../../assets/images';
import {RFValue} from 'react-native-responsive-fontsize';
import Header from '../../../components/appHeader';
import fontsFamily from '../../../assets/fontsFamily';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Header title={'Profile'} showBackButton={true} />
      <View style={styles.profileImageContainer}>
        <View style={styles.innerProfileImageContainer}>
          <Image
            source={images.room} // Replace with your image URL
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editIconText}>🔒</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.inputContainer, {flexDirection: 'row'}]}>
        <View style={styles.inputHalf}>
          <TextField label={'First name'} value="Kaylynn" />
        </View>
        <View style={styles.inputHalf}>
          <TextField label={'Last name'} value="Kenter" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextField label={'Email'} value="Kaylynn021@gmail.com" />
      </View>
      <View style={styles.inputContainer}>
        <TextField label={'Phone number'} value="+966 123 456 7890" />
      </View>
      <View style={styles.inputContainer}>
        <TextField label={'Date of birth'} value="28 October 2024" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  innerProfileImageContainer: {},
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: colors.primary,
    borderWidth: 4,
    borderColor: colors.lightGray,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  editIconText: {
    fontSize: RFValue(14),
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputHalf: {
    flex: 1,
    marginHorizontal: 5, // Add spacing between fields
  },
  button: {
    marginTop: 'auto', // Push the button to the bottom
    backgroundColor: colors.primary,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
  },
});

export default EditProfile;
