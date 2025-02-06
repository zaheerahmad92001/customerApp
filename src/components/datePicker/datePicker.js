import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
//import { MaterialIcons } from "@expo/vector-icons"; // If using Expo
import CalendarIcon from '../../assets/svgs/calendargray.svg'
import { widthPercentageToDP } from "react-native-responsive-screen";
import colors from "../../assets/colors";
const DatePickerComponent = () => {
    const [date, setDate] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (selectedDate) => {
        const formattedDate = selectedDate.toLocaleDateString("en-GB");
    //   const formattedDate = selectedDate
    //     ? selectedDate.toLocaleDateString("en-GB")
    //     : "DD/MM/YYYY";
      setDate(formattedDate);
      hideDatePicker();
    };
  
    return (
      <View style = {styles.container}>
        <TouchableOpacity style = {styles.dateInput} onPress={showDatePicker}>
          <Text style={[styles.dateText, !date && styles.placeholder]}>
            {date || "DD/MM/YYYY"}
          </Text>
          <CalendarIcon />
        </TouchableOpacity>
  
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.inputGray,
        borderRadius:10
        
    },
    // label: {
    //   fontWeight: "bold",
    //   fontSize: 16,
    //   marginBottom: 5,
    // },
    dateInput: {
        //width:widthPercentageToDP('75%'),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: colors.dateInput,
      paddingHorizontal: 15,
      borderRadius:10,
      height: 50, 
    },
    dateText: {
      fontSize: 16,
      color: "#333",
      flex: 1, 
      textAlignVertical: "center", 
    },
    placeholder: {
      color: "#888",
    },
  });
  
  export default DatePickerComponent;