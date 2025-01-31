import React from "react";
import { StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
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
const SmallText = (props) => {
  const {text, style} = props
return <Text style={[styles.smallText,style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  xlText: {
    fontSize: RFValue(15),
    fontFamily: fontsFamily.regular,
    fontWeight:'500',
    color:colors.appBlack,
  },
  lText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    fontWeight:'500',
    textAlign: 'center',
    color:colors.appBlack,
  },
  mediumText:{
    color:colors.appBlack,
    fontFamily:fontsFamily.extraLight,
    fontSize:RFValue(13),
    fontWeight:'500',
  },
  smallText:{
    color:colors.appBlack,
    fontFamily:fontsFamily.thin,
    fontSize:RFValue(12),
    fontWeight:'500',
  }
});

export { XlargeText, LargeText ,MediumText,SmallText };
