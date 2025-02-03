import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const BookingCard = ({date, professional, timeslot, services}) => {
  const total = services.reduce((sum, service) => sum + service.price, 0);
  const vat = total * 0.15;
  const grandTotal = total + vat;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Booking Details</Text>

      {/* Booking Details Section */}
      <View style={styles.row}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Professional:</Text>
        <Text style={styles.value}>{professional}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Timeslot:</Text>
        <Text style={styles.value}>{timeslot}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.subTitle}>Pricing Details</Text>
      {services.map((service, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{service.name}</Text>
          <Text style={styles.value}>SAR {service.price}</Text>
        </View>
      ))}

      <View style={styles.divider} />

      {/* Pricing Summary */}
      <View style={styles.row}>
        <Text style={styles.label}>Total:</Text>
        <Text style={styles.value}>SAR {total.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>VAT 15%:</Text>
        <Text style={styles.value}>SAR {vat.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.grandTotal}>Grand Total:</Text>
        <Text style={styles.grandTotal}>SAR {grandTotal.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 16,
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {fontSize: RFValue(14), fontFamily: fontsFamily.bold, marginBottom: 8},
  subTitle: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    marginTop: 8,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  label: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
  },
  value: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
  },
  grandTotal: {fontSize: RFValue(12), fontWeight: 'bold', color: '#d32f2f'},
  divider: {borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 8},
});

export default BookingCard;
