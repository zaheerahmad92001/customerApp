import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.appBG,
    },
    wrapper:{
      flex:1,
      backgroundColor:colors.appBG,
    },
  contentContainer:{
    flex:1,
    marginHorizontal:wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
    heading: {
      fontSize: RFValue(18),
      fontFamily: fontsFamily.semiBold,
      color: colors.appBlack,
      marginVertical: 10,
    },
    description: {
      fontFamily: fontsFamily.regular,
      color: colors.lightBlack,
      marginTop:heightPercentageToDP(0.2),
    },
    bookingsButton: {
      width: '100%',
      marginTop:heightPercentageToDP(12),
    },
    homeButton:{
      marginTop:heightPercentageToDP(2),
      backgroundColor:colors.lighterPrimary,
      borderColor:colors.lighterPrimary
    },
    homeButtonText:{
      color:colors.primary
    }
  });

  export default styles;