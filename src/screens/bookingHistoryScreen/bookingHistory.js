import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import BookingHistoryCard from '../../components/bookingHistoryCard/bookingHistoryCard';
import images from '../../assets/images';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ModalComponent from '../../components/modal';
import {
  LargeText,
  MediumText,
  SmallText,
  XlargeText,
} from '../../components/Typography';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import {Divider} from 'react-native-paper';
import {AppButton} from '../../components/appButton';
import CancelBooking from '../../components/modal/cancelBooking';

const BookingHistory = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleCancel = () => {
    console.log('Cancel Booking');
  };

  const handleReschedule = () => {
    console.log('Reschedule Booking');
  };

  const openModal = () => {
    setIsVisible(true);
  };

  const renderItem = ({item}) => {
    return (
      <BookingHistoryCard
        date="Sep 10, 2024"
        time="9:10 AM"
        title="Hair Avenue"
        location="Lakewood, California "
        services="Services: Hair Cut, Hair Wash"
        price="SAR 200"
        status="Confirmed"
        imageUri={images.room}
        onCancel={openModal}
        onReschedule={handleReschedule}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Booking History'} showBackButton />
      <View style={styles.wrapper}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <ModalComponent
        visible={isVisible}
        onClose={() => {
          setIsVisible(false);
        }}>
        <CancelBooking cancelButton={() => setIsVisible(false)} />
      </ModalComponent>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
});

export default BookingHistory;
