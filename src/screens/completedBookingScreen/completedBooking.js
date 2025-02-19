import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import BookingHistoryCard from '../../components/bookingHistoryCard/bookingHistoryCard';
import images from '../../assets/images';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const data = {
  date: 'Sep 10, 2024',
  time: '9:10 AM',
  title: 'Hair Avenue',
  location: 'Lakewood, California',
  services: 'Services: Hair Cut, Hair Wash',
  price: 'SAR 200',
  status: 'Completed',
  imageUri: images.room,
};

const CompletedBooking = () => {
  const navigation = useNavigation();

  const handleBookAgain = () => {
    console.log('Book againi');
  };

  const handleReview = () => {
   navigation.navigate('review');
  };

  const renderItem = ({item, index}) => {
    return (
      <BookingHistoryCard
        item={data}
        bookingOptions={handleBookAgain}
        reviewAndReschedule={() => handleReview(item)}
      />
    );
  };

  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: hp(1),
  },
});

export default CompletedBooking;
