import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../../assets/colors';
import Header from '../../components/appHeader';
import LoyaltyCard from '../../components/loyaltyCard/loyaltyCard';
import {allPointData, earnPointData, pointsButtons, usedPointData} from '../../staticData';
import LinearGradient from 'react-native-linear-gradient';
import styles from './loyaltyPoint.style'
import { LargeText, MediumText, SmallText, XlargeText } from '../../components/Typography';

const LoyaltyPoints = ({navigation , route}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Loyalty Points'} showBackButton onBackPress={()=>navigation.goBack()} />
      <View style={styles.wrapper}>
     
        <LinearGradient
          colors={[colors.lighterPrimary, '#D7A8B0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.pointsCard}
          >
          <View style={styles.pointsCardContainer}>
            <SmallText text={'ANAQA Points'} style={{colors:colors.appBlack}}/>
          <View style={styles.pointContainer}>
            <XlargeText text={'300'} style={styles.pointsText} />
            <SmallText text={'Points'} />
          </View>
          <SmallText text={'100 points = SAR 10'}  style={styles.pointsCardSubtext}/>
          </View>
        </LinearGradient>

        <LargeText text={'Loyalty Points History'} style={styles.heading}/>

        <View style={styles.buttonContainer}>
          {pointsButtons.map(category => (
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
      </View>
    </SafeAreaView>
  );
};

export default LoyaltyPoints;
