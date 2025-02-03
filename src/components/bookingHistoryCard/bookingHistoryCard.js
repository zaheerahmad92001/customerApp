import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Messages from '../../assets/svgs/messages.svg';
import {MediumText, SmallText} from '../Typography';
import styles from './booking.style';
import { AppButton } from '../appButton';

const BookingHistoryCard = ({
  date,
  time,
  title,
  location,
  services,
  price,
  status,
  imageUri,
  bookinOptions,
  reviewAndReschedule,
}) => {
const cancelORBook = status==='Confirmed' ? 'Cancel Booking' : 'Book Again';
const completeORReview = status==='Confirmed' ? 'Completed' : 'Leave a Review';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>
          {date} - {time}
        </Text>
        <Text
          style={[
            styles.status,
            status === 'Confirmed'
              ? styles.confirmed
              : status === 'Pending'
              ? styles.pendingStatus
              : status === 'Cancelled'
              ? styles.cancelledStatus
              : status === 'Completed'
              ? styles.completedStatus
              : '',
          ]}>
          {status}
        </Text>
      </View>

      <View style={styles.body}>

        <View style={styles.cardImage}>
          <Image source={imageUri} style={styles.image} />
        </View>

        <View style={styles.details}>
          <MediumText text={title} style={styles.title} />
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.services}>{services}</Text>
        </View>


        <View>
          <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          </View>
          {status === 'Completed' && (
            <TouchableOpacity style={styles.completedButton}>
              <SmallText text={'Report'} style={styles.reportText} />
            </TouchableOpacity>
          )}
          {status === 'Confirmed' && (
            <TouchableOpacity style={styles.icon}>
              <Messages />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {status !== 'Cancelled' && (
        <View style={styles.actions}>
          <AppButton title={cancelORBook} onPress={bookinOptions} style={styles.cancelButton} textstyle={styles.cancelText} />
          <AppButton title={completeORReview} onPress={reviewAndReschedule} style={styles.rescheduleButton} textstyle={styles.rescheduleText} />
        </View>
      )}
    </View>
  );
};

export default BookingHistoryCard;