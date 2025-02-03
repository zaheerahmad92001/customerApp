import { Platform, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fontsFamily from '../../../assets/fontsFamily';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.white,
    },
    wrapper:{
        flex:1,
        backgroundColor:colors.white,
        marginHorizontal:wp(4),
    },
    contentContainer:{
      // marginTop:hp(2),
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.inputGray,
      paddingHorizontal:wp(2.5),
      paddingVertical:wp(2),
      marginVertical: 6,
      borderRadius:10,
    },
    cardImage: {
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
    },
    icon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    cardInfo: {
      flex: 1,
      marginLeft:wp(3),
    },
    name: {
        marginBottom:hp(1),
        fontFamily:fontsFamily.extraLight,
    },
    details: {
      fontSize: RFValue(12),
      fontFamily: fontsFamily.regular,
      color: colors.appBlack,
    },
    expiryCvv: {
      alignItems: 'flex-end',
      marginRight: wp(4),
    },

    cvv: {
      fontSize: RFValue(12),
      fontFamily: fontsFamily.semiBold,
      color: colors.appBlack,
    },
    deleteButton: {
      backgroundColor: colors.gray,
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical:7,
      justifyContent: 'center',
      alignItems: 'center',
    },
button:{
  marginBottom: Platform.OS==='android'? hp(2): hp(0),
}


  });

  export default styles;
