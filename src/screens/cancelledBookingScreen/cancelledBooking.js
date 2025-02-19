import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import BookingHistoryCard from '../../components/bookingHistoryCard/bookingHistoryCard';
import images from '../../assets/images';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const data = {
  date: 'Sep 10, 2024',
  time: '9:10 AM',
  title: 'Hair Avenue',
  location: 'Lakewood, California',
  services: 'Services: Hair Cut, Hair Wash',
  price: 'SAR 200',
  status: 'Cancelled',
  imageUri: images.room,
};

const CancelledBooking = () => {

  
  const renderItem = ({item, index}) => {
    return (
      <BookingHistoryCard
        item={data}
        bookingOptions={() => {}}
        reviewAndReschedule={() => {}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: hp(1),
  },
});

export default CancelledBooking;
