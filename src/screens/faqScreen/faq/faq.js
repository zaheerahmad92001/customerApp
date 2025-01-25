import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import FAQItem from '../../../components/faqComponent/faqComponent';
import {faqs} from '../../../staticData';
import colors from '../../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import Header from '../../../components/appHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Faq = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'FAQ’s'} showBackButton />
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginBottom: hp(2),
  },
});

export default Faq;
