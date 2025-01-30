import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import Complete from '../../../assets/svgs/complete.svg';
import {AppButton} from '../../../components/appButton';

const RegisteredSuccessfuly = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Complete />
      <Text style={styles.heading}>Register Successfully!</Text>
      <Text style={styles.description}>
        Your account has been registered successfully.
      </Text>

      <View style={styles.bookingsButton}>
        <AppButton title="Done" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: RFValue(18),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginVertical: 10,
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginBottom: wp(18),
  },
  bookingsButton: {
    width: '100%',
  },
});

export default RegisteredSuccessfuly;
