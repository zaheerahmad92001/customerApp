import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import Header from '../../../components/appHeader';
import LoyaltyCard from '../../../components/loyaltyCard/loyaltyCard';
import {allPointData, earnPointData, usedPointData} from '../../../staticData';
import LinearGradient from 'react-native-linear-gradient';

const LoyaltyPoints = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Loyalty Points'} showBackButton />
      <ScrollView>
        <LinearGradient
          colors={[colors.lightPrimary, colors.primary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.pointsCard}>
          <Text style={styles.pointsCardHeading}>ANAQA Points</Text>
          <View style={styles.pointContainer}>
            <Text style={styles.pointsCardValue}>300</Text>
            <Text style={styles.pointsCardPoint}>Points</Text>
          </View>
          <Text style={styles.pointsCardSubtext}>100 points = SAR 10</Text>
        </LinearGradient>

        <Text style={styles.heading}>Loyalty Points History</Text>
        <View style={styles.buttonContainer}>
          {['All', 'Earned Points', 'Used Points'].map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.button,
                selectedCategory === category && styles.selectedButton,
              ]}
              onPress={() => setSelectedCategory(category)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedCategory === category && styles.selectedButtonText,
                ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedCategory === 'All' && (
          <>
            {allPointData.map(item => (
              <LoyaltyCard
                key={item.id}
                points={item.points}
                expiryDate={item.expiryDate}
              />
            ))}
          </>
        )}

        {selectedCategory === 'Earned Points' && (
          <>
            {earnPointData.map(item => (
              <LoyaltyCard
                key={item.id}
                points={item.points}
                expiryDate={item.expiryDate}
              />
            ))}
          </>
        )}

        {selectedCategory === 'Used Points' && (
          <>
            {usedPointData.map(item => (
              <LoyaltyCard
                key={item.id}
                points={item.points}
                expiryDate={item.expiryDate}
              />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
  },
  selectedButtonText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
  heading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginTop: hp(2),
    marginBottom: hp(4),
  },

  pointsCard: {
    borderRadius: 10,
    padding: 15,
    marginBottom: hp(2),
    borderWidth: 2,
    borderColor: colors.borderPrimary,
  },
  pointsCardHeading: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginBottom: 5,
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsCardValue: {
    fontSize: RFValue(24),
    fontFamily: fontsFamily.bold,
    color: colors.appBlack,
    marginBottom: 5,
  },
  pointsCardPoint: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.bold,
    color: colors.appBlack,
    marginLeft: 5,
  },
  pointsCardSubtext: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
});

export default LoyaltyPoints;
