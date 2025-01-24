import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'; // Import RFValue
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily'; // Import custom fonts family
import Header from '../../../components/appHeader';
import Trash from '../../../assets/svgs/trash.svg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Card = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Saved Cards'} showBackButton />
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
              }}
              style={styles.icon}
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.name}>Kaylynn Kenter</Text>
            <Text style={styles.details}>********2259</Text>
          </View>

          <View style={styles.expiryCvv}>
            <Text style={styles.expiry}>07/26</Text>
            <Text style={styles.cvv}>056</Text>
          </View>

          <TouchableOpacity style={styles.deleteButton}>
            <Trash />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.newButton}>
        <Text style={styles.newButtonText}>Add New Card</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputGray,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 4},
    marginVertical: 8,
  },
  cardImage: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cardInfo: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  details: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
  },
  expiryCvv: {
    alignItems: 'flex-end',
    marginRight: 16,
  },
  expiry: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  cvv: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  deleteButton: {
    backgroundColor: colors.gray,
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  deleteText: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    color: colors.primary,
  },
  newButton: {
    backgroundColor: colors.primary, // Add your desired button color
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
    marginTop: 'auto',
    width: wp(90),
  },
  newButtonText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
    color: colors.white,
    textAlign: 'center',
  },
});

export default Card;
