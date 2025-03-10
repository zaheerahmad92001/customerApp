import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:colors.white
  },
  wrapper:{
      flex:1,
      backgroundColor:colors.appBG1,
  },
  contentContainer:{
      paddingHorizontal:wp(4),
      backgroundColor:colors.appBG1,
  },
    label: {
      fontFamily: fontsFamily.thin,
      color: colors.appBlack,
      marginTop:8,
      marginBottom: 8,
    },
    subContainer:{
      marginHorizontal:wp(4),
      marginTop:hp(0.5),
    },
    couponText:{
      color:colors.primary
    },
    inputStyle: {
      minHeight: 130,
      textAlignVertical: 'top',
      fontSize: RFValue(14),
    },
    card:{
      shadowColor: '#000',
      shadowOffset: {width: 0.5, height:0.5},
      shadowOpacity: 0.3,
      shadowRadius: 1,
    elevation:10,
    },
    billView:{
      backgroundColor:colors.white,
      // marginTop:hp(0.5),
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingHorizontal:wp(4),

      elevation:20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius:1,
      
    },
    
  });

  export default styles;
