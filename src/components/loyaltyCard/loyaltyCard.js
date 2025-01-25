// LoyaltyCard.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import GreenArrow from '../../assets/svgs/greenArrowBox.svg';
import RedArrow from '../../assets/svgs/redArrowBox.svg';

const LoyaltyCard = ({points, expiryDate}) => {
  return (
    <View style={styles.cardContainer}>
      {points > 0 ? <GreenArrow /> : <RedArrow />}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Loyalty Points</Text>
        <Text style={styles.expiry}>Expire on {expiryDate}</Text>
      </View>
      <Text
        style={[
          styles.points,
          {color: points >= 0 ? colors.success : colors.error},
        ]}>
        {points > 0 ? `+${points}` : `${points}`} pt
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 5,
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  expiry: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  points: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
  },
});

export default LoyaltyCard;
