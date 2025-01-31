import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/appHeader';
import style from '../../complaints/AddNewRequest/AddNewRequest.style';
import TextField from '../../../components/textField/textField';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import DropdownComponent from '../../../components/dropdown/dropdown';
import SalonCard from '../../../components/complaintsSalonCard/complaintsSalonCard';
import {mockData} from '../../../staticData';
import { AppButton } from '../../../components/appButton';

const addrequestScreen = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    
    const Items = [
        { label: 'Option A', value: '1' },
        { label: 'Option B', value: '2' },
        { label: 'Option C', value: '3' },
        { label: 'Option D', value: '4' },
        { label: 'Option E', value: '5' },

    ];

    const RenderSalonCard = ({item}) => (
        <SalonCard
          image={'../images/room.png'}
          title={'Hair Avenue'}
          datetime={'Mon 21 Sep 2024'}
          location={'Moratuwa, Colombo'}
          distance={'2 km'}
          service={'Hair Cut'}
          onFavorite={() => handleFavoritePress(item.id)}
          showFavoriteButton={false}
          position={item.position}
        />
      );
      const handleFavoritePress = id => {
        console.log(`Favorite pressed for salon ID: ${id}`);
      };
    const [comments, setComments] = useState('');

    const addrequest = () => {
        console.log('add request');
    };
    return (
        //Lable,Placeholder,Value,Items,onChange
        <SafeAreaView style={style.container}>
            <Header title={'Request or Complaints'} showBackButton />

            <View style={style.mainContainer}>
                <ScrollView>
                    <View>
                    <RenderSalonCard item={mockData}/>
                        <Text style={style.headingtext}>Add New Request</Text>
                        {/* <View style={style.bookingreferenceView}>
                    <TextField label={'Booking Reference'} value="Test Value" />
                </View> */}

                        <Text style={style.selecteType}>Booking Reference</Text>
                        <DropdownComponent
                            data={Items}
                            value={selectedValue}
                            onChange={(item) => setSelectedValue(item.value)}
                            placeholder="Choose an option"
                        />

                        <Text style={style.selecteType}>Select Type</Text>
                        <DropdownComponent
                            data={Items}
                            value={selectedValue}
                            onChange={(item) => setSelectedValue(item.value)}
                            placeholder="Choose an option"
                        />
                        <Text style={style.selecteType}>Select Issue</Text>
                        <DropdownComponent
                            data={Items}
                            value={selectedValue}
                            onChange={(item) => setSelectedValue(item.value)}
                            placeholder="Choose an option"
                        />

                        <Text style={style.selecteType}>Select Salon</Text>
                        <DropdownComponent
                            data={Items}
                            value={selectedValue}
                            onChange={(item) => setSelectedValue(item.value)}
                            placeholder="Choose an option"
                        />
                        <View>
                            <Text style={style.selecteType}>Comments</Text>
                            <View style={style.commentsView}>
                                <TextInput style={style.textInput}
                                    placeholder="Type your text here..."
                                    value={comments}
                                    onChangeText={setComments}
                                >

                                </TextInput>
                            </View>
                        </View>
                    </View>
                </ScrollView>


                {/* Button Container */}
                <AppButton title={"Submit"} onPress={addrequest} />

                {/* <View style={style.bottomContainer}>
                    <TouchableOpacity style={style.buttonContainer} onPress={addrequest}>
                        <Text style={style.buttonTextStyle}> Submit</Text>

                    </TouchableOpacity>

                </View> */}

            </View>

        </SafeAreaView>
    );
};
export default addrequestScreen;