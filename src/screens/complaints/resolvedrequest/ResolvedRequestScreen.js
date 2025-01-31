import React from "react";
import Header from "../../../components/appHeader";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import style from '../../complaints/pendingrequests/pendingRequestScreen.style';
import ResolvedCard from '../../../components/resolvedComplaintCard/resolvedComplaintCard'
//import FilterIcon from "../../../assets/svgs/";
//import {PendingRequestkData} from '../../staticData';
const reslovedRequestMockData = [
    {
      id: 1,
      RequestID: "#2156054", // Replace with your image path
      complaintDate: '02 Feb 2024',
      salon: 'ABS Salon',
      complainType: 'Service',
      service: "Hair cut",
      description: "Lorem ipsum dolor sit amet consectetur. Vulputate mauris pharetra egvllus.",
      complaintStatus: 'Pending',
    },
  ];
const ResolvedRequestScreen = () => {
    const RenderResolvedComplaintCard = (Item) => (
        <ResolvedCard></ResolvedCard>
    );

    
    return (
        <SafeAreaView style= {style.container}>
            <Header title={'Resolved'} showBackButton></Header>
            <View style = {style.mainContainer}>
                {/* <View style = {style.HeaderView}>
                    <Text style={style.statusHeading}>Pending Request</Text>
                    <View style={style.filterView}>
                    <Text>Filter</Text>
                        <Text>Filter</Text>
                    </View>
                </View> */}
                 <FlatList 
                 data={reslovedRequestMockData}
                 keyExtractor={(item) => item.id.toString}
                 renderItem={RenderResolvedComplaintCard}>
                 </FlatList>
                {/* //<RenderpendingComplaintCard></RenderpendingComplaintCard> */}


            </View>
        </SafeAreaView>
    );
};
export default ResolvedRequestScreen;