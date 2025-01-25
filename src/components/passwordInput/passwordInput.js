import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons'; // Ensure this import
import FeatherIcons from 'react-native-vector-icons/Feather'; // Ensure this import
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const PasswordInput = ({
  label,
  placeholder = 'Enter your password',
  onChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <SimpleIcons
          name="lock"
          size={20}
          color={colors.lightBlack}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={!isPasswordVisible}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          onChangeText={onChange}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <FeatherIcons
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={20}
            color={colors.lightBlack}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: RFValue(14),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
});

export default PasswordInput;
