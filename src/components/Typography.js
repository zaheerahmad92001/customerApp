import React from "react";
import { StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import fontsFamily from "../assets/fontsFamily";
import colors from "../assets/colors";

const XlargeText = (props) => {
    const {text, style} = props
  return <Text style={[styles.xlText,style]}>{text}</Text>;
};

const LargeText = (props) => {
    const {text,style} = props
  return <Text style={[styles.lText,style]}>{text}</Text>;
};
const MediumText = (props) => {
    const {text, style} = props
  return <Text style={[styles.mediumText,style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  xlText: {
    marginTop:hp(1.3),
    fontSize: RFValue(15),
    fontFamily: fontsFamily.regular,
    fontWeight:'500',
  },
  lText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    fontWeight:'500',
    textAlign: 'center',
  },
  mediumText:{
    color:colors.appBlack,
    fontFamily:fontsFamily.extraLight,
    fontSize:RFValue(13),
    fontWeight:'500',
    marginBottom:hp(1.3),
  }
});

export { XlargeText, LargeText ,MediumText };
