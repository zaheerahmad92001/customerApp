import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    // backgroundColor:colors.appBG,
  },
  contentContainer: {
    flex: 1,
  },
  searchContainer: {
    // marginBottom: hp(0.7),
    marginHorizontal: wp(4),
    paddingBottom: hp(1.7),
    backgroundColor:colors.white,
  },
  heading: {
    textAlign:'left',
    marginTop: hp(1),
  },
  contentContainerStyle:{
    marginTop:hp(1),
    // paddingBottom: hp(0.5),
  },
  listHeader:{
    marginTop:hp(1),
    paddingBottom: hp(0.5),
    // backgroundColor:colors.error,
  },
  listStyle:{
    flex:1,
    backgroundColor:colors.appBG,
    paddingHorizontal:wp(4),
  },
//   list:{backgroundColor:colors.appBG,paddingTop:hp(0.2)},
columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default styles;
