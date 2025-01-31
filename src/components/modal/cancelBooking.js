import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {MediumText, XlargeText} from '../Typography';
import {Divider} from 'react-native-paper';
import {AppButton} from '../appButton';

const CancelBooking = ({cancelButton, agreeButton}) => {
  return (
    <View>
      <XlargeText text={'Cancel Booking'} style={styles.heading} />
      <Divider style={styles.divider} />
      <XlargeText
        text={'Are you sure you want to cancel?'}
        style={styles.subHeading}
      />
      <MediumText
        text={
          'Canceling your appointment will remove it from your confirm bookings.'
        }
        style={styles.description}
      />
      <AppButton
        title={'Yes, Cancel'}
        onPress={agreeButton}
        style={styles.yesButton}
      />

      <AppButton
        title={'No'}
        onPress={cancelButton}
        style={styles.cancelButton}
        textstyle={styles.cancelText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
  },
  divider: {
    borderWidth: 0.1,
    marginTop: 2,
    marginBottom: 10,
  },
  subHeading: {
    fontFamily: fontsFamily.semiBold,
    marginBottom: 10,
  },
  description: {
    marginVertical: 20,
    color: colors.lightBlack,
  },
  yesButton: {
    marginTop: 10,
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: colors.lightPrimary,
    borderWidth: 0,
  },
  cancelText: {
    color: colors.primary,
  },
});

export default CancelBooking;
