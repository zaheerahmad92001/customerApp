import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/appHeader';
import {serviceData} from '../../../staticData';
import ServiceCard from '../../../components/serviceCard/serviceCard';
import moment from 'moment';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';
import Calendar from '../../../assets/svgs/calendar.svg';

const AvailableTimeSlot = () => {
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [selectedTime, setSelectedTime] = useState('02:00 PM');

  // Generate dates for today and the next 4 days
  const dates = Array.from({length: 5}, (_, i) =>
    moment().add(i, 'days').format('YYYY-MM-DD'),
  );
  const times = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
    '09:00 PM',
    '10:00 PM',
    '11:00 PM',
    '12:00 AM',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Available Time Slot'} showBackButton />
      <View>
        <FlatList
          data={serviceData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ServiceCard
              image={item.image}
              title={item.title}
              location={item.location}
              date={item.date}
              service={item.service}
              professional={item.professional}
              distance={item.distance}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <View style={styles.datePicker}>
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
              <Text
                style={[
                  styles.dayText,
                  selectedDate === date && styles.selectedText,
                ]}>
                {moment(date).format('ddd')}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  selectedDate === date && styles.selectedText,
                ]}>
                {moment(date).format('D')}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.moreDatesItem}
            onPress={() => console.log('Show More Dates')}>
            <Calendar />
            <Text style={styles.moreDatesText}>More Dates</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.timePicker}>
        <Text style={styles.sectionTitle}>Select Time</Text>
        <View style={styles.times}>
          {times.map(time => (
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
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Select & Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  listContainer: {
    paddingBottom: 20,
  },
  datePicker: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateItem: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.lightPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: wp(18),
    margin: 2,
  },
  dayText: {
    fontSize: RFValue(10),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  dateText: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  selectedItem: {
    backgroundColor: colors.primary,
  },
  selectedText: {
    color: colors.white,
  },
  moreDatesItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.lightPrimary,
    alignItems: 'center',
    width: 70,
    height: wp(18),
  },
  moreDatesText: {
    fontSize: RFValue(10),
    color: colors.appBlack,
    fontFamily: fontsFamily.semiBold,
    textAlign: 'center',
    marginTop: 5,
  },
  timePicker: {
    marginTop: 20,
  },
  times: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeItem: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: colors.gray,
    width: '30%',
    alignItems: 'center',
  },
  timeText: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
  },
  continueButton: {
    marginTop: 'auto',
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  continueText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
});

export default AvailableTimeSlot;
