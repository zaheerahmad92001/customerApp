import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import images from '../../assets/images';

const InvoiceCard = ({invoice}) => {
  return (
    <View
      style={[
        styles.card,
        invoice.status === 'Paid' ? styles.paidCard : styles.cancelledCard,
      ]}>
      <Text style={styles.date}>{`${invoice.date} - ${invoice.time}`}</Text>
      <View style={styles.detailsRow}>
        <Image source={images.room} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{invoice.name}</Text>
          <Text style={styles.service}>{invoice.service}</Text>
        </View>
        <View>
          <Text
            style={
              invoice.status === 'Paid'
                ? styles.paidStatus
                : styles.cancelledStatus
            }>
            {invoice.status}
          </Text>
          <Text style={styles.amount}>{invoice.amount}</Text>
        </View>
      </View>
      <View style={styles.amountContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
    margin: 5,
    // borderWidth: 1,
    // borderColor: '#EDEDED',
  },
  //   paidCard: {
  //     borderLeftWidth: 5,
  //     borderLeftColor: '#4CAF50',
  //   },
  //   cancelledCard: {
  //     borderLeftWidth: 5,
  //     borderLeftColor: '#F44336',
  //   },
  date: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    marginBottom: 12,
    fontFamily: fontsFamily.regular,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  service: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
  },
  paidStatus: {
    backgroundColor: colors.lightSuccess,
    color: colors.success,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 3,
  },
  cancelledStatus: {
    backgroundColor: colors.lightError,
    color: colors.error,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 3,
  },
  amountContainer: {
    marginTop: 12,
  },
  amount: {
    fontSize: RFValue(12),
    color: '#FF5C5C',
    textAlign: 'center',
    fontFamily: fontsFamily.semiBold,
    backgroundColor: colors.lighterPrimary,
    borderRadius: 5,
    width: wp(20),
  },
});

export default InvoiceCard;
