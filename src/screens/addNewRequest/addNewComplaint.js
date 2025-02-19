import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/appHeader';
import styles from './styles';
import {View, Text, ScrollView, TextInput} from 'react-native';
import DropdownComponent from '../../components/dropdown/dropdown';
import {AppButton} from '../../components/appButton';
import {LargeText} from '../../components/Typography';
import TextField from '../../components/textField/textField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddrequestScreen = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const Items = [
    {label: 'Option A', value: '1'},
    {label: 'Option B', value: '2'},
    {label: 'Option C', value: '3'},
    {label: 'Option D', value: '4'},
    {label: 'Option E', value: '5'},
  ];

  const [comments, setComments] = useState('');

  const addrequest = () => {
    console.log('add request');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Request or Complaints'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <LargeText text={'Add New Request'} style={styles.headingtext} />
          <View style={styles.subContainer}>
            <Text style={styles.label}>Booking Reference</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Choose an option"
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Select Type</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Choose an option"
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Select Issue</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Choose an option"
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Select Salon</Text>
            <DropdownComponent
              data={Items}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Choose an option"
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Comments</Text>
            <TextField
              placeholder={'Your review here'}
              multiline
              inputStyle={styles.inputStyle}
              style={styles.inputStyle}
              onChangeText={setComments}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Submit'}
          onPress={addrequest}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};
export default AddrequestScreen;
