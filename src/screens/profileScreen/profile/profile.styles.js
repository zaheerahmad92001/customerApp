import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const imageSize = wp(18);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    wrapper:{
        flex:1,
        marginHorizontal:wp(4)
    },
    profileContainer: {
      backgroundColor: colors.primary,
      paddingVertical: 15,
      paddingHorizontal:wp(3.5),
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageContainer:{
        width:imageSize,
        height:imageSize,
        borderWidth:2.5,
        borderColor: colors.white,
        borderRadius:imageSize/2,
        overflow:'hidden',

    },
    image: {
        width:null,
        height: null,
        flex: 1,
    },
    titleContainer: {
      marginLeft: wp(3),
    },
    title: {
        color:colors.white,
        textAlign:'left',
    },
    subTitle: {
      color: colors.white,
      marginTop:hp(0.4)
    },
    inviteContainer: {
      backgroundColor: colors.lightPrimary,
      padding:hp(1.8),
      marginTop: hp(1.6),
      borderRadius: 10,
      flexDirection: 'row',
    },
    inv: {
      color: colors.primary,
      marginLeft: 10,
      fontWeight:'600',
    },
    infoText: {
      color: colors.appBlack,
      marginTop: hp(1.6),
    },
    supportStyle:{
        color: colors.appBlack,
        marginBottom: hp(1.6),
    },

    menuContainer: {
      marginTop:5,
      borderRadius: 10,
      paddingVertical: 10,
    },
  });

  export default styles;