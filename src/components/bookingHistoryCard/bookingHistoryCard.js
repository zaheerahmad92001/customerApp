import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Messages from '../../assets/svgs/messages.svg';
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
  onCancel,
  onReschedule,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>
          {date} - {time}
        </Text>
        <Text
          style={[styles.status, status === 'Confirmed' && styles.confirmed]}>
          {status}
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.cardImage}>
          <Image source={imageUri} style={styles.image} />
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.services}>{services}</Text>
        </View>

        <View>
          <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          </View>
          <TouchableOpacity style={styles.icon}>
            <Messages />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.actions}>
        <AppButton title="Cancel Booking" onPress={onCancel} style={styles.cancelButton} textstyle={styles.cancelText} />
        <AppButton title="Reschedule" onPress={onReschedule}  style={styles.rescheduleButton} />
      </View>
    </View>
  );
};
export default BookingHistoryCard;
