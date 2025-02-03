import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
      


});

export default Styles;