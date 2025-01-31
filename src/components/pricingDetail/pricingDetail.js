import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { LargeText, MediumText, SmallText, XlargeText } from '../Typography';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

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

      <MediumText text = {'Pricing Details'} style={styles.header}/>
      {data.items.map((item, index) => (
        <View style={styles.row} key={index}>
          <Text style={styles.label}>{item.name}</Text>
          <Text style={styles.label}>SAR {item.price}</Text>
        </View>
      ))}

      <View style={styles.row}>
        <Text style={[styles.label, styles.discount]}>Discount</Text>
        <Text style={[styles.price, styles.discount]}>SAR {data.discount}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={[styles.label,{color:colors.appBlack}]}>Total</Text>
        <Text style={[styles.label,{color:colors.appBlack}]}>SAR {total.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>VAT {data.vatRate}%</Text>
        <Text style={[styles.label]}>SAR {vat.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <SmallText text={'Grand Total'} style={styles.grandTotal} />
        <Text style={[styles.label,{color:colors.appBlack}]}>
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
    marginBottom: hp(1),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: RFValue(4),
  },
  label: {
    fontSize: RFValue(12),
    color:colors.lightBlack,
    fontFamily: fontsFamily.regular,
    fontWeight:'400',
    // marginLeft: 5,
  },
  price: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
  },
  discount: {
   color:colors.success
  },
  grandTotal: {
    // marginLeft:5,
  },
  divider: {
    marginVertical: hp(1),
    borderWidth:1,
    borderColor:colors.lightGray,
  },
});

export default PricingDetails;
