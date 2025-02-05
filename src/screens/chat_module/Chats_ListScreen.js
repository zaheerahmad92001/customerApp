import React, { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from './Chats_ListScreen.Style';
import Icon from 'react-native-vector-icons/EvilIcons';
import Header from "../../components/appHeader";
import Search from "../../components/search";
import ChatListCard from "../../components/chatlistCard/ChatListCard";
import { mockData, recentSearches } from "../../staticData";
import images from "../../assets/images";

const ChatListView = () => {
    const [filteredSearches, setFilteredSearches] = useState(recentSearches);
    const [isInputActive, setIsInputActive] = useState(false);
   const arr = [1,2,3,4,5,6,7,8,9,10];
    const renderChatCard =({item})=>{
     return (
     <ChatListCard
     image={images.room}
     name={'Big Hair We Care'}
     message={'Hi Guys, Wassup!'}
     time={'Yesterday, 5:25pm'}
     messagecount={'6'}
     ></ChatListCard>
    );
    };
    return (
        <SafeAreaView style={style.container}>
            <View style={style.mainContainer}>
                <Header title={'Chat'} showBackButton={false}></Header>
                <View style={style.contentWrapper}>

                    <View>
                        <Search
                            setFilteredSearches={setFilteredSearches}
                            setIsInputActive={setIsInputActive}
                            isSearch={true}
                        />
                    </View>
                    <View><Text style = {style.recentTextview}>RECENTS</Text></View>
                    <FlatList
                    data={[1,2,3,4,5]}
                    renderItem={renderChatCard}
                    //keyExtractor={item => item.id}
                    contentContainerStyle= {{marginTop:10}}>
                     </FlatList>



                </View>
            </View>

        </SafeAreaView>
    );
};
export default ChatListView;