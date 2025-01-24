import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import images from '../../../assets/images';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import {menuOptions, supportOptions} from '../../../staticData';
import Icon from 'react-native-vector-icons/Entypo';
import BackArrow from '../../../assets/svgs/backArrow.svg';
import Header from '../../../components/appHeader';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Profile'} />
      <ScrollView>
        <View style={styles.profileContainer}>
          <Image source={images.room} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Kaylynn Kenter</Text>
            <Text style={styles.subTitle}>kaylynn021@gmail.com</Text>
          </View>
        </View>
        <View style={styles.inviteContainer}>
          <BackArrow />
          <Text style={styles.inv}>Invite Friends</Text>
        </View>

        <Text style={styles.infoText}>Personal Information</Text>
        <View style={styles.menuContainer}>
          {menuOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuItemsTitleCard}>
                <Image source={option.img} />
                <Text style={styles.menuText}>{option.title}</Text>
              </View>
              <Icon name="chevron-right" size={20} color={colors.lightBlack} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.infoText}>Support</Text>
        {supportOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuItemsTitleCard}>
              <Image source={option.img} />
              <Text style={styles.menuText}>{option.title}</Text>
            </View>
            <Icon name="chevron-right" size={20} color={colors.lightBlack} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  profileContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 80 / 2,
  },
  titleContainer: {
    marginLeft: 5,
  },
  title: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    color: colors.white,
  },
  subTitle: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.white,
  },
  inviteContainer: {
    backgroundColor: colors.lightPrimary,
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  inv: {
    color: colors.primary,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    marginLeft: 10,
  },
  infoText: {
    color: colors.appBlack,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    marginTop: 10,
  },
  menuContainer: {
    marginTop: 10,
    // backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemsTitleCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginLeft: 5,
  },
});

export default Profile;
