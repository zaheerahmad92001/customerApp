import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../assets/colors";
import images from "../../assets/images";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";
import { LargeText, XlargeText } from "../Typography";

const ChatListCard = ({ image, name, message, time, messagecount, }) => {
    return (
        <View style={style.container}>
            <View style={style.CardView}>
                <View style={style.imageContainer}>
                    <Image source={images.room} style={style.imageView}></Image>
                    <View style={style.onlineIndicator} />
                </View>

                <View style={style.chatContent}>
                    <LargeText text={'Big Hair We Care'} style={{ fontWeight: "600" }} />
                    <Text style={style.chatMessage}>Hi Guys, Wassup!</Text>
                </View>
                <View style={style.chatInfo}>
                    <Text style={style.chatTime}>Yesterday, 5:25pm</Text>
                    <View style={style.unreadBadge}><Text style={style.unreadText}>6</Text></View>
                </View>


            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.appBG,
        flex: 1
    },
    CardView: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        backgroundColor: colors.appBG
    },
    chatContent: {
        flex: 1,
        marginLeft: 10,
        alignItems: 'flex-start'
    },
    imageView: {
        height: hp(5),
        width: wp(12),
        borderRadius: 10
    },
    onlineIndicator: {
        width: 12,
        height: 12,
        backgroundColor: "green",
        borderRadius: 6,
        position: "absolute",
        bottom: 0,
        right: 0,
        borderWidth: 2,
        borderColor: colors.white,
    },
    chatTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    chatMessage: {
        fontSize: 14,
        color: colors.chatlistmessage,
        marginLeft: 5
    },
    chatInfo: {
        alignItems: "flex-end",
    },
    chatTime: {
        fontSize: 14,
        color: colors.chatlistmessage,
        fontFamily: fontsFamily.medium
    },
    unreadBadge: {
        backgroundColor: colors.primary,
        width: 25,
        height: 25,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
    },
    unreadText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: fontsFamily.bold,
    },


});


export default ChatListCard;