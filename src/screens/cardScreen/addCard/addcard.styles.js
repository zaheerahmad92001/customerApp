import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../../assets/fontsFamily";
import colors from "../../../assets/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:colors.white,
    },
    container: {
      flex: 1,
      marginHorizontal:wp(4),
    },
    inputStyle:{
        marginBottom:hp(2),
    },
    heading: {
      marginBottom:hp(3),
      marginTop:hp(3),
      fontFamily:fontsFamily.extraBold,
      fontSize:RFValue(17)
    },
    button: {
      backgroundColor: colors.primary,
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 'auto',
    },
    buttonText: {
      fontSize: RFValue(12),
      fontFamily: fontsFamily.semiBold,
      color: colors.white,
    },
  });
  export default styles;