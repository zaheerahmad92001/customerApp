import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import Messages from '../../assets/svgs/messages.svg';
import {MediumText, SmallText} from '../Typography';
import styles from './booking.style';
import {AppButton} from '../appButton';
import InfoIcon from '../../assets/svgs/Info.svg';

const BookingHistoryCard = props => {
  const {item, bookingOptions, reviewAndReschedule} = props;
  const {date, time, title, location, services, price, status, imageUri} = item;

  let cancelORBook = '';
  let completeORReview = '';

  if (status === 'Confirmed' || status === 'Pending') {
    cancelORBook = 'Cancel Booking';
    completeORReview = 'Reschedule';
  } else {
    cancelORBook = 'Book Again';
    completeORReview = 'Leave a Review';
  }


  return (
    <View style={[styles.card, status === 'Pending' && styles.cardTopPadding]}>
      {status === 'Pending' && (
        <View style={{alignSelf: 'flex-end'}}>
          <InfoIcon />
        </View>
      )}
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
          <View style={styles.titleContainer}>
            <View style={{flex: 1}}>
              <MediumText text={title} style={styles.title} />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{price}</Text>
            </View>
          </View>

          <View style={styles.serviceContainer}>
            <View style={{flex: 1}}>
              <Text style={styles.location}>{location}</Text>
              <Text style={styles.services}>{services}</Text>
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
      </View>
      {status !== 'Cancelled' && (
        <View style={styles.actions}>
          <AppButton
            title={cancelORBook}
            onPress={bookingOptions}
            style={styles.cancelButton}
            textstyle={styles.cancelText}
          />
          <AppButton
            title={completeORReview}
            onPress={reviewAndReschedule}
            style={styles.rescheduleButton}
            textstyle={styles.rescheduleText}
          />
        </View>
      )}
    </View>
  );
};

export default BookingHistoryCard;
