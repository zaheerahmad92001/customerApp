import React, {Component, useState} from 'react';
import {StyleSheet, TextInput, Platform, Text,View, Dimensions} from 'react-native';
import {THEME_FONT} from '../../constants/fontFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CountryPicker, {
  getAllCountries,
  getCallingCode,
  DEFAULT_THEME,
} from 'react-native-country-picker-modal';

// import TextInputMask from 'react-native-text-input-mask';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';

const ContactInput = props => {
  const [visible, setVisible] = useState(false);
  const switchVisible = () => setVisible(!visible);

  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent:'center',
          alignItems: 'center',
          // width:width(20),
          // backgroundColor:'red', 
          
        }}
        onPress={() => switchVisible()}>
        <CountryPicker
          visible={false}
          countryCode={props.cca2}
          translation={'common'}
          withCallingCode={true}
          withAlphaFilter
          withFilter
          // theme={{flagSizeButton: RFValue(25)}}
          theme={{flagSizeButton:Platform.OS==='ios' ? 20:15}}
          onSelect={props.select}
          containerButtonStyle={{
            padding: 0,
            // marginTop:Platform.OS==='ios'? -5: -10,
            fontSize:RFValue(14),
            // backgroundColor:'red'
          }}
          {...{
            modalProps: {
              visible,
            },
            onClose: () => setVisible(false),
            // onOpen: () => setVisible(true),
          }}
        />

      <Text 
           style={{
             fontSize:RFValue(14), 
             alignItems: 'center',
              textAlign: 'center',
              top:Platform.OS==='ios' ?2:0 
              }}>
          +{props.callingCode}
      </Text>
      
      </TouchableOpacity>
      <View style={styles.inputStyle}>
        <TextInput
          style={[
            {
              //color: BLACK,
              fontSize:RFValue(14),
              padding: 0,
              // backgroundColor:'red',
              fontFamily: fontsFamily.regular,
            
            },
          ]}
          selection={props.selection}
          placeholder={props.placeholder}
          placeholderTextColor={'#979797'}
          value={props.contact}
          maxLength={21}
          onFocus={props.onFocus}
          autoCapitalize={props.autoCapitalize}
          editable={props.editable}
          onChangeText={props.onChangeText}
          keyboardType={'number-pad'}
          secureTextEntry={props.secureTextEntry}
          disabled={props.disabled ? true : false}
        //   mask={"([000]) [000]-[000]-[000]-[000]"}
        />
      </View>
    </View>
  );
};
export default ContactInput;
const styles = StyleSheet.create({
  iconStyle: {
    fontSize: RFValue(18),
    color: colors.appBlack,
  },
  inputStyle: {
    //backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
    //marginVertical:5
  },
  upperView: {
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:colors.gray,
    paddingHorizontal: 10,
    borderRadius: RFValue(10),
    paddingVertical: Platform.OS === 'ios' ? 15 : 5,
    height: 49,
  },
});