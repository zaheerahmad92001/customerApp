
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import style from '../../complaints/ComplaintsScreens/complaints.styles';
import Header from '../../../components/appHeader';

const ComplaintsRequestScreen = () => {

    const addrequest = () => {
        console.log('add equest');
    };
    return (
        <SafeAreaView style={style.container}>
            <Header title={'Request or Complaints'} showBackButton />
            <View style={style.wraper}>
                <View style={style.rowContainer}>
                    {/* Box 1 */}
                    <View style={style.box}>
                        <Text style={style.statusText}>Pending</Text>
                        <View style={style.innerRoundedBox}>
                            <Text style={style.innerTextValue}>02</Text>
                        </View>
                    </View>
                    {/* Box 2 */}
                    <View style={style.box}>
                        <Text style={style.statusText}>Resolved</Text>
                        <View style={style.innerRoundedBox}>
                            <Text style={style.innerTextValue}>10</Text>
                        </View>
                    </View>
                    {/* Box 3 */}
                    <View style={style.box}>
                        <Text style={style.statusText}>Rejected</Text>
                        <View style={style.innerRoundedBox}>
                            <Text style={style.innerTextValue}>01</Text>
                        </View>
                    </View>
                </View>
                {/* Button Container */}
                <View style={style.bottomContainer}>
                    <TouchableOpacity style={style.buttonContainer} onPress={addrequest}>
                        <Text style={style.buttonTextStyle}> Add Request or Complaints</Text>

                    </TouchableOpacity>

                </View>


            </View>


        </SafeAreaView>
    );
};
export default ComplaintsRequestScreen;