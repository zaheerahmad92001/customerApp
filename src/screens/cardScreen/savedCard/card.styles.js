import React from "react";
import { StyleSheet } from 'react-native';
import colors from "../../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import fontsFamily from "../../../assets/fontsFamily";

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
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.inputGray,
      paddingHorizontal:wp(2.5),
      paddingVertical:wp(3),
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 2,
      shadowOffset: {width: 0, height: 0},
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
      marginLeft:wp(3),
    },
    name: {
        marginBottom:hp(1)
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
      borderRadius: 7,
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
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

  export default styles;