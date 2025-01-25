import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const PricingDetails = ({data}) => {
  const calculateTotal = () => {
    const itemsTotal = data.items.reduce((sum, item) => sum + item.price, 0);
    return itemsTotal + data.discount;
  };

  const total = calculateTotal();
  const vat = (total * data.vatRate) / 100;
  const grandTotal = total + vat;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pricing Details</Text>
      {data.items.map((item, index) => (
        <View style={styles.row} key={index}>
          <Text style={styles.label}>{item.name}</Text>
          <Text style={styles.price}>SAR {item.price}</Text>
        </View>
      ))}
      <View style={styles.row}>
        <Text style={[styles.label, styles.discount]}>Discount</Text>
        <Text style={[styles.price, styles.discount]}>SAR {data.discount}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.label}>Total</Text>
        <Text style={styles.price}>SAR {total.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>VAT {data.vatRate}%</Text>
        <Text style={styles.price}>SAR {vat.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, styles.grandTotal]}>Grand Total</Text>
        <Text style={[styles.price, styles.grandTotal]}>
          SAR {grandTotal.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginTop: 10,
  },
  header: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    marginBottom: RFValue(12),
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: RFValue(4),
  },
  label: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
  },
  price: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
  },
  discount: {
    color: 'green',
  },
  grandTotal: {
    fontSize: RFValue(14),
    color: colors.appBlack,
    fontFamily: fontsFamily.semiBold,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: RFValue(8),
  },
});

export default PricingDetails;
