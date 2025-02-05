import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import Tickimage from '../../assets/svgs/tickmessagedeliver.svg'

const ChatCard = (props) => {
    const { Item } = props
    console.log('data', Item)
    return (
        <View>
            <View style={[style.messageCardView, Item.sent ? style.sentMessage : style.receivedMessage]}>
                <Text style={style.messageText}>{Item.text}</Text>
            </View>
            {Item.sent ?
                <View style={style.senderTime}>
                    <Text style={[style.timeMessage]}>{Item.time}</Text>
                    <Tickimage />

                </View>
                :
                <Text style={[style.timeMessage, Item.sent ? style.senderTime : style.recieverTime]}>{Item.time}</Text>
            }
        </View>
    );
};
const style = StyleSheet.create({
    messageCardView: {
        maxWidth: "80%",
        padding: 12,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10
        //marginBottom: 10,
    },
    sentMessage: {
        alignSelf: "flex-end",
        backgroundColor: colors.inputGray,
        marginRight: 20
    },
    receivedMessage: {
        alignSelf: "flex-start",
        backgroundColor: colors.lightPrimary,
        marginLeft: 20
    },
    messageText: {
        color: colors.appBlack,
        fontSize: RFValue(12)
    },
    timeMessage: {
        color: colors.chatlistmessage,
        fontSize: RFValue(11)

    },
    senderTime: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 23,
        alignItems: 'center',
        gap: 2
    },
    recieverTime: {
        alignSelf: 'flex-start',
        marginLeft: 23
    }
});
export default ChatCard;