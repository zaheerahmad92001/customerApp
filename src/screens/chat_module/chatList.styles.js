import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      mainContainer: {
        flex: 1,
        backgroundColor:colors.appBG,
      },
      contentWrapper:{
        flex:1,
        paddingHorizontal: wp(4),
      },
      recentTextview:{
        marginTop:10,
        color:colors.chatlistmessage,
        fontSize:RFValue(12),
        fontWeight:'500'
      },
      


});

export default Styles;