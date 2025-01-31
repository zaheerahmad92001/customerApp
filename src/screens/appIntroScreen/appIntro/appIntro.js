import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import images from '../../../assets/images';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {slides} from '../../../staticData';

const AppIntro = () => {
  const renderItem = ({item}) => {
    return (
      <ImageBackground source={item.image} style={styles.headerBackground}>
        <View style={styles.footerContainer}>
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="circle-chevron-right" color={colors.primary} size={24} />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.doneButtonContainer}>
        <Text style={styles.startedText}>Get Started</Text>
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      activeDotStyle={{backgroundColor: colors.primary}}
      bottomButton={true}
    />
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    width: 35,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    alignSelf: 'center',
  },
  slide: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: RFValue(24),
    fontFamily: fontsFamily.bold,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  headerBackground: {
    flex: 1,
  },
  doneButtonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  startedText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    color: colors.white,
  },
  footerContainer: {
    position: 'absolute',
    bottom: '0%',
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: colors.white,
    height: hp(35),
    paddingTop: 20,
    paddingBottom: 20,
    opacity: 0.8,
  },
  footerText: {
    fontSize: RFValue(10),
    fontFamily: fontsFamily.regular,
    color: colors.grey,
  },
});

export default AppIntro;
