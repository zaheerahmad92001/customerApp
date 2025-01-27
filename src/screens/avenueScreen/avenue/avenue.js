import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../../assets/images';
import Header from '../../../components/appHeader';
import Message from '../../../assets/svgs/messages.svg';
import PinkHeart from '../../../assets/svgs/pinkHeart.svg';
import Clock from '../../../assets/svgs/clock.svg';
import Location from '../../../assets/svgs/locationMarker.svg';
import Star from '../../../assets/svgs/star.svg';
import MedalStar from '../../../assets/svgs/medalStar.svg';
import colors from '../../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import Entypo from 'react-native-vector-icons/Entypo';

const Avenue = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Hair Avenue'} showBackButton />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={images.room} style={styles.image} />

        <View style={styles.subContainer}>
          <Text style={styles.heading}>Hair Avenue</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.icon}>
              <Message />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <PinkHeart />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>
          Hair Avenue provides expert haircuts, styling, along with services
          like facials, cleanups, skincare and makeup to keep you looking your
          best.
        </Text>
        <View style={styles.locationContainer}>
          <View style={styles.locationSubContainer}>
            <Location />
            <Text style={styles.locationText}>
              No 03,Kadalana Road, Kadalana, Moratuwa
            </Text>
          </View>
          <View style={styles.locationSubContainer}>
            <Clock />
            <Text style={styles.timeText}>9AM-10PM, Mon -Sun</Text>
          </View>
          <View style={styles.locationSubContainer}>
            <Star />
            <Text style={styles.locationText}>4.5 (312)</Text>
          </View>
        </View>
        <Text style={styles.heading}>Services</Text>
        <View style={styles.serviceCard}>
          <View style={styles.serviceInfo}>
            <View style={styles.ratedContainer}>
              <Text style={styles.serviceTitle}>Hair Cut</Text>
              <View style={styles.rateContainer}>
                <MedalStar />
                <Text style={styles.topRatedText}>Top Rated</Text>
              </View>
            </View>
            <View style={styles.subHeadings}>
              <Text style={styles.subServices}>3 Sub services</Text>
              <View style={styles.ratingContainer}>
                <Star />
                <Text style={styles.ratingText}>4.7</Text>
                <Text style={styles.ratingCount}>(312)</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.expandButton}>
            <Entypo name="chevron-down" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.serviceCard}>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceTitle}>Facial</Text>
            <Text style={styles.price}>Price: SAR 10</Text>
            <Text style={styles.estimatedTime}>Estimated Time: 30 Mins</Text>
            <View style={styles.ratingSubContainer}>
              <Star />
              <Text style={styles.ratingText}>4.7</Text>
              <Text style={styles.ratingCount}>(312)</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Entypo name="plus" size={20} color={colors.lightBlack} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Prevent content from being cut off
  },
  image: {
    width: '100%',
    height: '30%',
    borderRadius: 10,
  },
  icon: {
    backgroundColor: colors.lightPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    padding: 6,
    borderRadius: 8,
    marginTop: 5,
    marginLeft: 10,
  },
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  locationContainer: {
    marginVertical: wp(3),
  },
  locationSubContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  locationText: {
    textDecorationLine: 'underline',
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.primary,
    marginLeft: 5,
  },
  timeText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginLeft: 5,
  },
  serviceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  subServices: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginVertical: 2,
  },
  price: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.primary,
  },
  estimatedTime: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  ratingSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    color: colors.primary,
    marginHorizontal: 5,
  },
  ratingCount: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  expandButton: {
    padding: 5,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  expandText: {
    fontSize: RFValue(12),
    color: colors.appBlack,
  },
  addButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: colors.lightBlack,
    backgroundColor: colors.white,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeadings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rateContainer: {
    flexDirection: 'row',
    marginLeft: 5,
    backgroundColor: colors.ratedBox,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  topRatedText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
  },
  continueButton: {
    marginTop: 'auto',
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  continueText: {
    color: colors.white,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.bold,
  },
});

export default Avenue;
