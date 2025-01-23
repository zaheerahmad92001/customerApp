import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import images from '../../../assets/images';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Notification = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={{textAlign: 'center'}}>Header</Text>
      <ScrollView>
        <View style={styles.notify}>
          <Text style={styles.text}>Today</Text>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image source={images.candle} style={styles.cardImage} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Booking Cancelled</Text>
              <Text style={styles.subTitle}>You have made a salon payment</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image source={images.candle} style={styles.cardImage} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Booking Cancelled</Text>
              <Text style={styles.subTitle}>You have made a salon payment</Text>
            </View>
          </View>
        </View>

        <View style={styles.notify}>
          <Text style={styles.text}>Yesterday</Text>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image source={images.candle} style={styles.cardImage} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Booking Cancelled</Text>
              <Text style={styles.subTitle}>You have made a salon payment</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image source={images.candle} style={styles.cardImage} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Booking Cancelled</Text>
              <Text style={styles.subTitle}>You have made a salon payment</Text>
            </View>
          </View>
        </View>

        <View style={styles.notify}>
          <Text style={styles.text}>October 2, 2024</Text>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image source={images.candle} style={styles.cardImage} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Booking Cancelled</Text>
              <Text style={styles.subTitle}>You have made a salon payment</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image source={images.candle} style={styles.cardImage} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Booking Cancelled</Text>
              <Text style={styles.subTitle}>You have made a salon payment</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 10,
  },
  cardContainer: {
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 6,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin:5
  },
  cardImageContainer: {
    backgroundColor: colors.primaryLite,
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 35,
    height: 35,
  },
  text: {
    fontFamily: fontsFamily.regular,
    fontSize: 16,
    marginBottom: 10,
  },
  titleContainer: {
    marginLeft: 5,
  },
  title: {
    fontFamily: fontsFamily.semiBold,
    fontSize: 16,
  },
  subTitle: {
    fontFamily: fontsFamily.thin,
    fontSize: 16,
  },
  notify: {
    marginTop: wp(5),
  },
});

export default Notification;
