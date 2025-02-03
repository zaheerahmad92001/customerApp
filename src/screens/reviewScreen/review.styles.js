import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: wp(4),
  },
  headerTitle: {
    marginTop:hp(1.3),
    fontSize: RFValue(15),
    fontFamily: fontsFamily.regular,
    fontWeight:'500',
  },
  imageView:{
    width: 75,
    height:75,
    overflow:'hidden',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 20,
    marginTop:hp(3),

  },
  image: {
    width: null,
    height:null,
    flex:1,
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    fontWeight:'500',
    textAlign: 'center',
  },
  border:{
    width:'100%',
    height:0.7,
    backgroundColor:colors.offWhite,
    marginTop:hp(4),
    marginBottom:hp(2),
  },
  textStyle:{
    color:colors.appBlack,
    fontFamily:fontsFamily.extraLight,
    fontSize:RFValue(13),
    fontWeight:'500',
    marginBottom:hp(1.3),
  },



  question: {
    fontSize: RFValue(14),
    marginBottom: 10,
    fontFamily: fontsFamily.regular,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    marginLeft: 2,
    fontSize: RFValue(12), // Updated to RFValue
  },
  buttons: {
    marginTop: 'auto', // Push buttons to the bottom
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  submitButton: {
    backgroundColor: '#d28ba7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  submitText: {
    color: colors.white,
    fontSize: RFValue(12), // Updated to RFValue
    textAlign: 'center',
    fontFamily: fontsFamily.semiBold,
  },
  cancelButton: {
    marginTop: hp(2),
    backgroundColor: colors.lighterPrimary,
    borderColor: colors.lighterPrimary,
  },
  cancelText: {
    fontSize: RFValue(12), // Updated to RFValue
    textAlign: 'center',
    fontFamily: fontsFamily.semiBold,
  },
  inputStyle: {
    padding: 10,
    minHeight: 130,
    textAlignVertical: 'top',
    // marginBottom: hp(8),
    fontSize: RFValue(14), // Added font size for input text
  },
  
});

export default styles;
