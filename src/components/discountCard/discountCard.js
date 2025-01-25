import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import Ticket from '../../assets/svgs/ticket.svg';

const DiscountCard = ({title, discount, validity, remaining, onApply}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ticket />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.discount}>{discount}</Text>
        </View>
        <Text style={styles.remaining}>{remaining} left</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.validity}>Valid: {validity}</Text>
        <View style={styles.footer}>
          <TouchableOpacity onPress={onApply} style={styles.applyButton}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5C6CB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  discount: {
    fontSize: RFValue(10),
    color: colors.lightBlack,
  },
  validity: {
    fontSize: RFValue(10),
    color: colors.lightBlack,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remaining: {
    fontSize: RFValue(10),
    color: colors.primary,
    marginRight: 15,
    backgroundColor: colors.lightPrimary,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    fontFamily: fontsFamily.semiBold,
  },
  applyButton: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  applyText: {
    fontSize: RFValue(12),
    color: colors.primary,
    fontFamily: fontsFamily.semiBold,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default DiscountCard;
