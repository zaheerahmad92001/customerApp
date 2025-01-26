import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const ServiceCard = ({
  image,
  title,
  location,
  date,
  service,
  professional,
  distance,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.service}>Service: {service}</Text>
        <View style={styles.profContainer}>
          <Text style={styles.professional}>Professional: {professional}</Text>
          <Text style={styles.distance}>{distance}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  date: {
    fontSize: RFValue(10),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  location: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginVertical: 2,
  },
  service: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  professional: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  distance: {
    fontSize: RFValue(10),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginTop: 5,
  },
  profContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ServiceCard;
