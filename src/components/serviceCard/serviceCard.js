import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import Marker from '../../assets/svgs/locationMarker.svg';
import {LargeText, SmallText} from '../Typography';

const ServiceCard = props => {
  const {item ,style} = props;
  const {image, title, location, date, service, professional, distance} = item;

  return (
    <View style={[styles.cardContainer,style]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.headerContainer}>
          <LargeText text={title} style={styles.title} />
          <SmallText text={date} style={styles.date} />
        </View>

        <View style={styles.locationContainer}>
          <Marker />
          <SmallText text={location} style={styles.date} />
        </View>
        <SmallText text={`Service: ${service}`} style={styles.date} />
        <View style={styles.profContainer}>
          <SmallText
            text={`Professional: ${professional}`}
            style={styles.date}
          />
          <SmallText text={`${distance}`} style={styles.date} />
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
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: null,
    height: null,
    flex: 1,
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
    color: colors.appBlack,
  },
  date: {
    color: colors.lightBlack,
    fontWeight: '500',
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
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ServiceCard;
