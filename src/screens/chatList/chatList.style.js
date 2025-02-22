import { Platform, StyleSheet } from "react-native";
import colors from "../../assets/colors";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fontsFamily from "../../assets/fontsFamily";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      contentWrapper:{
        flex:1,
        marginHorizontal: wp(4),
      },
      recentTextview:{
        marginTop:10,
        marginBottom:5,
        fontWeight:'600',
        color:colors.lightBlack,
      },

});

export default Styles;