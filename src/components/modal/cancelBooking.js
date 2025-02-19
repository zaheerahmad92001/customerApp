import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {MediumText, XlargeText} from '../Typography';
import {Divider} from 'react-native-paper';
import {AppButton} from '../appButton';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CancelBooking = (props) => {
  const {onAgree, onCancel} = props;
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
        onPress={onAgree}
        style={styles.yesButton}
      />

      <AppButton
        title={'Back'}
        onPress={onCancel}
        style={styles.cancelButton}
        textstyle={styles.cancelText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: RFValue(16),
    fontWeight:'600',
  },
  divider: {
    borderWidth: 0.1,
    marginTop:hp(1),
    marginBottom: hp(1),
  },
  subHeading: {
  },
  description: {
    marginVertical:hp(1.5),
    color: colors.lightBlack,
  },
  yesButton: {
    marginTop: 10,
  },
  cancelButton: {
    marginTop: hp(2),
    backgroundColor: colors.lighterPrimary,
    borderColor:colors.lighterPrimary,
  },
  cancelText: {
    color: colors.primary,
  },
});

export default CancelBooking;
