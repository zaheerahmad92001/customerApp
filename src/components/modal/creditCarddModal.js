import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Close from '../../assets/svgs/close.svg';
import Clock from '../../assets/svgs/clock.svg';
import {MediumText, SmallText} from '../Typography';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import {openingHours} from '../../staticData';
import CreditCard from '../creditCard';

const CreditCardModal = props => {
  const {onClose, list} = props;
  return (
    <View>
      <Pressable onPress={onClose} style={styles.header}>
        <MediumText text={'Select Card'} />
        <Close />
      </Pressable>

      <View style={styles.innerContainer}>
        {list.map((item, index) => {
          const isClose = item.day === 'Sunday' ? true : false;
          return (
            <React.Fragment>
              <CreditCard/>
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
    paddingBottom:hp(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: hp(1),
  },
  innerContainer: {},
  dayText: {
    fontWeight: '500',
    marginTop: hp(1),
  },
  text: {
    color: colors.lightBlack,
    fontWeight: '500',
  },
});
export default CreditCardModal;
