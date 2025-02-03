import React from "react";
import { StyleSheet, View } from 'react-native';
import colors from "../../assets/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const ChatHeader = () => {
    return (
        <View style={style.container}>
            <View style={style.mainContainer}></View>
            <View style={style.dotedView}></View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.appBG
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    },
    dotedView: {
        width: wp(5),
        height: hp(4),
        shadowRadius: 5,
        backgroundColor: colors.primary
    }
});