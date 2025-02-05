import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import fontsFamily from "../../../assets/fontsFamily";
const style = StyleSheet.create({

    chatContainer: {
        padding: 20,
        
    },
    dividerView: {
        width: '90%',
        height: 1,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: colors.gray

    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15,
        paddingVertical: 8,
        
        //borderTopWidth: 1,
        //borderTopColor: "#eee",
      },
      inputMainView:{
        flexDirection: "row",
        flex:1,
        backgroundColor:colors.lightGray,
        alignItems:'center',
        borderRadius:8,
        paddingRight:15,
        paddingLeft:12,
        paddingVertical:5


      },
      input: {
        fontFamily:fontsFamily.regular,
        fontWeight:'400',
        flex: 1,
        fontSize: 16,
        padding: 10,
      },
      sendButton: {
        padding: 10,
        borderRadius: 20,
        marginLeft: 0,
        marginRight:10
      },

}
);
export default style;