import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../../components/appHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Privacy Policy'} showBackButton />
      <ScrollView>
        <Text style={styles.heading}>Privacy Policy</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Eget turpis risus ut nullam
          posuere porttitor at vivamus. Proin augue morbi viverra scelerisque
          nunc nulla. Venenatis mattis in ultrices adipiscing. Mi purus augue
          donec ultricies. Elit augue in elementum tempus quis scelerisque erat.
          Tincidunt ac erat dictum ornare consequat luctus. Posuere viverra
          purus fames eget dolor sit amet. Arcu amet dolor dignissim fusce. Orci
          eu pulvinar ut vulputate egestas nisi tortor pellentesque. Nulla
          pellentesque et a in aliquet duis nisi. Mattis turpis sem aliquet
          massa id nibh. Elit ut semper tincidunt cursus.
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Eget turpis risus ut nullam
          posuere porttitor at vivamus. Proin augue morbi viverra scelerisque
          nunc nulla. Venenatis mattis in ultrices adipiscing. Mi purus augue
          donec ultricies. Elit augue in elementum tempus quis scelerisque erat.
          Tincidunt ac erat dictum ornare consequat luctus. Posuere viverra
          purus fames eget dolor sit amet. Arcu amet dolor dignissim fusce. Orci
          eu pulvinar ut vulputate egestas nisi tortor pellentesque. Nulla
          pellentesque et a in aliquet duis nisi. Mattis turpis sem aliquet
          massa id nibh. Elit ut semper tincidunt cursus.
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Eget turpis risus ut nullam
          posuere porttitor at vivamus. Proin augue morbi viverra scelerisque
          nunc nulla. Venenatis mattis in ultrices adipiscing. Mi purus augue
          donec ultricies. Elit augue in elementum tempus quis scelerisque erat.
          Tincidunt ac erat dictum ornare consequat luctus. Posuere viverra
          purus fames eget dolor sit amet. Arcu amet dolor dignissim fusce. Orci
          eu pulvinar ut vulputate egestas nisi tortor pellentesque. Nulla
          pellentesque et a in aliquet duis nisi. Mattis turpis sem aliquet
          massa id nibh. Elit ut semper tincidunt cursus.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  heading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
});

export default PrivacyPolicy;
