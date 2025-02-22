import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 15,
    backgroundColor: colors.white,
  },
  mainContainer: {
    backgroundColor: colors.appBG,
    flex: 1,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: RFValue(20),
    fontFamily: fontsFamily.bold,
    marginTop: hp(3),
  },
  label: {
    color: colors.appBlack,
    fontSize: RFValue(13),
    fontFamily: fontsFamily.medium,
    marginTop: hp(3),
    marginBottom: 10,
    
  },
  phoneContainer: {
    width: '100%',
    height: 50,
  },
  textInput: {
    paddingVertical: 0,
    backgroundColor: colors.inputGray,
    color: colors.appBlack,
    height:50
  },
  flagButton: {
    backgroundColor: colors.inputGray,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  halfWidth: {
    width: '48%',
  },
  inputFields: {
    marginTop: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  termViews: {
    marginLeft:10,
  },
  termsText: {
    color: colors.lightBlack,
    fontSize: RFValue(12),
    alignItems: 'center',
    fontFamily: fontsFamily.medium
  },
  privacyPolicyText: {
    color: colors.primary,
    fontWeight: "bold"
  },
  signUpButton: {
    backgroundColor: colors.primary,
    marginVertical: 10,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
  signUpText: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.semiBold,
  },
  loginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom:40
  },
  headingAcc: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.medium,
  },
  subHeadingAcc: {
    fontSize: RFValue(13),
    color: colors.primary,
    fontFamily: fontsFamily.medium,
    marginLeft: 5,
  },
});
export default styles;