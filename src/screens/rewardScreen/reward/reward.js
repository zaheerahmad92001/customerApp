import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import GiftBox from '../../../assets/svgs/giftPackage.svg';
import ForwardArrow from '../../../assets/svgs/forwardArrow.svg';
import colors from '../../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../../components/appHeader';

const Reward = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header showTitle={false} showBackButton />
        <View style={styles.giftImageContainer}>
          <GiftBox />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.headerText}>
            Invite friends & get 100 points as a reward.
          </Text>
          <Text style={styles.subText}>
            Invite friends to join ANAKA and receive a 100 Points reward as a
            thank you after successful. Share the experience and enjoy exclusive
            benefits together!
          </Text>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Share Invite Link</Text>
            <ForwardArrow />
          </TouchableOpacity>
          <View style={styles.loyalPointsContainer}>
            <Text style={styles.availablePointsText}>Available Points</Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsNumber}>300</Text>
              <Text style={styles.pointsText}>Loyalty Points</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  loyalPointsContainer: {
    paddingHorizontal: 15,
  },
  giftImageContainer: {
    alignSelf: 'center',
    marginTop: hp(1),
    marginBottom: hp(5),
  },
  headerText: {
    fontSize: RFValue(16),
    textAlign: 'center',
    fontFamily: fontsFamily.bold,
    color: colors.appBlack,
    marginBottom: hp(5),
  },
  subText: {
    fontSize: RFValue(12),
    textAlign: 'center',
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    marginBottom: 20,
    lineHeight: 20,
  },
  shareButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  shareButtonText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.white,
  },
  pointsContainer: {
    backgroundColor: colors.lightGray,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  availablePointsText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginBottom: 5,
  },
  pointsNumber: {
    fontSize: RFValue(22),
    fontFamily: fontsFamily.semiBold,
    color: colors.primary,
  },
  pointsText: {
    fontSize: RFValue(22),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
});

export default Reward;
