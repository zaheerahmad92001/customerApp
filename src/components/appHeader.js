import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fontsFamily from '../assets/fontsFamily';

const Header = ({
  title,
  onBackPress,
  showBackButton = false,
  showTitle = true,
}) => {
  return (
    <View style={[styles.header]}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <View style={styles.leftView}>
            <Ionicons name="chevron-back" size={20} color={colors.appBlack} />
            <Text style={styles.backButtonText}>Back</Text>
          </View>
        </TouchableOpacity>
      )}

      {showTitle && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red',
    // backgroundColor:colors.white,
    paddingHorizontal: wp(2),
    height:
      Platform.OS === 'android' ? wp(12) + StatusBar.currentHeight : wp(12),
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: colors.appBlack,
    fontSize: 14,
    fontFamily: fontsFamily.regular,
  },
});

export default Header;
