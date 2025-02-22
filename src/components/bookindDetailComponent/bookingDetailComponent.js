import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { LargeText, MediumText, SmallText } from '../Typography';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const BookingCard = (props) => {
  const {item} = props;
  const {date, professional, timeslot, services} = item
  const total = services.reduce((sum, service) => sum + service.price, 0);
  const vat = total * 0.15;
  const grandTotal = total + vat;

  return (
    <View style={styles.card}>
      <LargeText text={'Booking Details'} style={styles.title}/>

      {/* Booking Details Section */}
      <View style={styles.row}>
        <SmallText text={'Date:'} style={styles.label} />
        <SmallText text={date} style={styles.value}/>
      </View>
      <View style={styles.row}>
        <SmallText text={'Professional:'} style={styles.label} />
        <SmallText text={professional} style={styles.value}/>
      </View>
      <View style={styles.row}>
        <SmallText text={'Timeslot:'} style={styles.label} />
        <SmallText text={timeslot} style={styles.value}/>
      </View>

      <View style={styles.divider} />

      <LargeText text={'Pricing Details'} style={styles.title}/>

      {services.map((service, index) => (
        <View key={index} style={styles.row}>
          <SmallText text={service.name} style={styles.label} />
          <SmallText text={`SAR ${service.price}`} style={styles.value}/>
        </View>
      ))}

      <View style={styles.divider} />

      {/* Pricing Summary */}
      <View style={styles.row}>
          <SmallText text={'Total:'} style={[styles.label,{color:colors.appBlack}]} />
          <SmallText text={`SAR ${total.toFixed(2)}`} style={[styles.value,{color:colors.appBlack}]}/>
      </View>

      <View style={styles.row}>
        <SmallText text={'VAT 15%:'} style={[styles.label,{color:colors.lightBlack}]} />
        <SmallText text={`SAR ${vat.toFixed(2)}`} style={[styles.value]}/>
      </View>

      <View style={styles.row}>
      <MediumText text={'Grand Total:'} style={[styles.label]} />
      <MediumText text={`SAR ${grandTotal.toFixed(2)}`} style={[styles.label]}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal:wp(4),
    borderRadius: 10,
    paddingTop:16,
    paddingHorizontal:10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height:0.5},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation:10,

  },
  title: {
    textAlign:"left",
    marginBottom: 10,
    },
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
    fontWeight:'500',
  },
  value: {
    color: colors.lightBlack,
    fontWeight:'500',
  },
  grandTotal: {fontSize: RFValue(12), fontWeight: 'bold', color: '#d32f2f'},
  divider: {borderBottomWidth:0.7, borderBottomColor:colors.grayBorder, marginVertical: 8},
});

export default BookingCard;
