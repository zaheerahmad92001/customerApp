import { Text, View } from "react-native";
import React from "react";
import {StyleSheet} from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";


const MyDropdown = ({labelField, placeholder, value, data, onChange}) => {
   return (
    <View style={styles.container}>
       <Dropdown 
      style={styles.dropdown}
      data={data}
      placeholder={placeholder || 'Select an option'}
      labelField="label" // Fixed to match the structure of your Items
      valueField="value" // Fixed to match the structure of your Items
      value={value}
      onChange={onChange}
      maxHeight={300}
      fontFamily={fontsFamily.regular}
      iconStyle = {styles.iconStyle}
      placeholderStyle = {styles.placeholderStyle}
      selectedTextStyle = {styles.selectedTextStyle}
      containerStyle = {styles.dropDownContainerStyle}
      
      
      
      
       />
    </View>
   );
};


const styles = StyleSheet.create({
   container:{
    margin:5,
    borderRadius:10

   },
   dropdown:{
    height: 50,
    borderWidth: 0,
    borderRadius: 10,
    marginLeft:12,
    marginRight:12,
    backgroundColor:colors.inputGray,
    fontFamily:fontsFamily.regular,
    fontSize:RFValue(12)
    
   },
   iconStyle: {
    marginRight: 15,
  },
  dropDownContainerStyle:{
    borderRadius:10,
    backgroundColor:colors.lightGray
  },
  placeholderStyle : {
    fontSize: RFValue(10),
    color: colors.placholdercolor,
    fontsFamily:fontsFamily.regular,
    marginLeft:10
  },
  selectedTextStyle : {
    fontSize: RFValue(11),
    color: colors.appBlack,
    fontsFamily:fontsFamily.regular,
    marginLeft:10
  }
  });
  export default MyDropdown;