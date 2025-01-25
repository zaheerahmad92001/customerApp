import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import FAQItem from '../../../components/faqComponent/faqComponent';
import {faqs} from '../../../staticData';
import Header from '../../../components/appHeader';
import images from '../../../assets/images';
import CustomerSupportImage from '../../../assets/svgs/customerSupport.svg';
import LinkedIn from '../../../assets/svgs/linkedin.svg';
import Youtube from '../../../assets/svgs/youtube.svg';
import Facebook from '../../../assets/svgs/facebook.svg';
import Insta from '../../../assets/svgs/insta.svg';
import SMS from '../../../assets/svgs/sms.svg';
import MsgIcon from '../../../assets/svgs/msgIcon.svg';

const CustomerSupport = () => {
  const [selectedTab, setSelectedTab] = useState('FAQ'); // State to manage selected tab

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Customer Support'} showBackButton />

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'FAQ' && styles.activeTabButton,
          ]}
          onPress={() => setSelectedTab('FAQ')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'FAQ' && styles.activeTabText,
            ]}>
            FAQ's
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Contact' && styles.activeTabButton,
          ]}
          onPress={() => setSelectedTab('Contact')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Contact' && styles.activeTabText,
            ]}>
            Contact Us
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'FAQ' ? (
        <View>
          <Text style={styles.heading}>Frequently Asked Questions</Text>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </View>
      ) : (
        <View style={styles.contactContainer}>
          {/* <Image source={images.room} style={styles.contactImage} /> */}
          <CustomerSupportImage />
          <View style={styles.contactDetails}>
            <View style={styles.contactBox}>
              <MsgIcon />
              <Text style={styles.contactText}>+966 123 456 7890</Text>
            </View>
            <View style={styles.contactBox}>
              <SMS />
              <Text style={styles.contactText}> Support@anaqa.com</Text>
            </View>
          </View>
          <Text style={styles.socialHeading}>Follow Us</Text>
          <View style={styles.socialIcons}>
            <LinkedIn />
            <Youtube />
            <Facebook />
            <Insta />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: hp(4),
  },
  tabButton: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  tabText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  activeTabText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginBottom: hp(2),
  },
  contactContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contactImage: {
    width: widthPercentageToDP(50),
    height: widthPercentageToDP(50),
    marginBottom: 20,
  },
  contactDetails: {
    width: '100%',
    marginBottom: 20,
    marginTop: hp(4),
  },
  contactBox: {
    backgroundColor: colors.lightPrimary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.medium,
    color: colors.appBlack,
    marginLeft: 5,
  },
  socialHeading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.medium,
    color: colors.appBlack,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
});

export default CustomerSupport;
