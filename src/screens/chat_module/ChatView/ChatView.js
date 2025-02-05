import React, { useState } from "react";
import { Alert, FlatList, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import ChatHeader from "../../../components/ChatHeader/ChatHeader";
import images from "../../../assets/images";
import style from "./ChatView.Style";
import ChatCard from "../../../components/messageCard/MessageCard";
import DocumentAttachment from '../../../assets/svgs/attachedocument.svg';
import SendIcon from '../../../assets/svgs/sendicon.svg';
import colors from "../../../assets/colors";
import DocumentPicker from '@react-native-documents/picker';
const ChatViewScreen = () => {
    const [file, setFile] = useState(null);
    const arr = [
        { id: 1, text: "Lorem", time: "7:21", sent: false },
        { id: 2, text: "Lorem ipsum", time: "7:24", sent: true },
        { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip", time: "7:26", sent: false },
    ];

    const [messages, setMessages] = useState(arr);
    const [message, setmessage] = useState('');

    const sendMessage = () => {
        if (message.trim().length > 0) {
            setMessages([...message, { id: Date.now().toString(), text: message, time: '7:34', sent: false }]);
            sendMessage("");
        }
    };
    const renderMessageCard = ({ item }) => {
        return (
            <ChatCard Item={item} />
        );
    };

const pickDocumnets = async() => {
    try {
        Alert.alert('calling')
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        console.log('here is reslt',result)
  
        setFile(result[0]);
        console.log('Picked document:', result);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log('User cancelled document picker');
        } else {
          console.log('Error picking document:', err);
        }
      }
};

    return (
        <SafeAreaView style={{flex:1, backgroundColor:colors.white}}>
            <ChatHeader userImage={images.room} userName={'Alexandra’s Salon'}></ChatHeader>
            <View style={style.dividerView}></View>

            <FlatList
                data={messages}
                renderItem={renderMessageCard}
                keyExtractor={item => item.id}
                contentContainerStyle={style.chatContainer}
            ></FlatList>

            <View style={style.inputContainer}>
                <View style = {style.inputMainView}>
                <TextInput style={style.input} placeholder="Write a message" value={message} onChangeText={setmessage}></TextInput>
                <TouchableOpacity onPress={pickDocumnets}>
                    <DocumentAttachment />
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.sendButton} onPress={sendMessage}>
                    <SendIcon />
                </TouchableOpacity>


            </View>

        </SafeAreaView>
    );
};
export default ChatViewScreen;