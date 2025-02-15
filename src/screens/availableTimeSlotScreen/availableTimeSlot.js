import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import Header from '../../components/appHeader';
import {AvailableTimeSlots, serviceData} from '../../staticData';
import ServiceCard from '../../components/serviceCard/serviceCard';
import moment from 'moment';
import Calendar from '../../assets/svgs/calendar.svg';
import styles from './timeslot.style';
import { LargeText, MediumText, SmallText } from '../../components/Typography';
import { AppButton } from '../../components/appButton';
import { BottomSheet } from '../../components/bottomSheet';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CustomCalendar from '../../components/calendar';

const AvailableTimeSlot = ({navigation, route}) => {
  const refRBSheet  = useRef();
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [selectedTime, setSelectedTime] = useState('02:00 PM');

  // Generate dates for today and the next 4 days
  const dates = Array.from({length: 5}, (_, i) =>
    moment().add(i, 'days').format('YYYY-MM-DD'),
  );


  const openBottomSheet = useCallback((item) => {
        if (refRBSheet.current) {
           refRBSheet.current.present()
        }
      }, [refRBSheet]);

    const hideBottomSheet = () => {
      if (refRBSheet.current) {
        refRBSheet.current.close();
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Available Time Slot'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
    
        <View style={styles.contentContainer}>
          <ServiceCard item={serviceData[0]} />
        </View>
        
        <View style={styles.wrapper}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <View style={styles.dates}>
            {dates.map(date => (
              <TouchableOpacity
                key={date}
                style={[
                  styles.dateItem,
                  selectedDate === date && styles.selectedItem,
                ]}
                onPress={() => setSelectedDate(date)}>
                <SmallText
                 text= {moment(date).format('ddd')}
                  style={[
                    styles.dayText,
                    selectedDate === date && styles.selectedText,
                  ]}/>
        
                <LargeText
                 text={moment(date).format('D')}
                  style={[
                    styles.dateText,
                    selectedDate === date && styles.selectedText,
                  ]}/>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.moreDatesItem}
              onPress={openBottomSheet}>
              <Calendar />
              <MediumText text={'More Dates'}  style={styles.moreDatesText}/>
            </TouchableOpacity>
          </View>
      
        <View style={styles.timePicker}>
          <Text style={styles.sectionTitle}>Select Time</Text>
          <View style={styles.times}>
            {AvailableTimeSlots.map(time => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeItem,
                  selectedTime === time && styles.selectedItem,
                ]}
                onPress={() => setSelectedTime(time)}>
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === time && styles.selectedText,
                  ]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <AppButton 
        onPress={()=>navigation.navigate('orderDetail')} 
        title ={'Select & Continue'} 
        style={styles.continueButton}
        />
      </View>

      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() =>hideBottomSheet()}
        scrollEnabled={true}
        disableDynamicSizing={true}
        removeSheetScrolllView={true}
        height={heightPercentageToDP(50)}
      >
        <CustomCalendar/>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default AvailableTimeSlot;
