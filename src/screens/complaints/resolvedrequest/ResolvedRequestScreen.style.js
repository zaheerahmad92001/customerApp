import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP } from "react-native-responsive-screen";
import {
    heightPercentageToDP,
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import fontsFamily from "../../../assets/fontsFamily";

const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:colors.white
        },
        mainContainer:{
            flex:1,
            backgroundColor:colors.white,
            padding:5
        },
        statusHeading:{
            fontFamily:fontsFamily.regular,
            fontSize:RFValue(15),
        },
        HeaderView:{
            marginTop:10,
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:16,
            alignItems:'center'
        },
        filterView:{
            width:wp('30%'),
            paddingTop:10,
            paddingBottom:10,
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:colors.lightGray,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:5
        }
    }
);

export default styles;