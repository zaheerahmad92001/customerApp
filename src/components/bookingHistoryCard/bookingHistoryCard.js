import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import Messages from '../../assets/svgs/messages.svg';

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
        <Image source={imageUri} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.services}>{services}</Text>
        </View>
        <View>
          <Text style={styles.price}>{price}</Text>
          <TouchableOpacity style={styles.icon}>
            <Messages />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelText}>Cancel Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rescheduleButton}
          onPress={onReschedule}>
          <Text style={styles.rescheduleText}>Reschedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 3},
    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  date: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
  },
  status: {
    fontSize: RFValue(12),
    color: colors.gray,
    backgroundColor: colors.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontFamily: fontsFamily.regular,
  },
  confirmed: {
    backgroundColor: colors.confirmYellowLight,
    color: colors.confirmYellow,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: fontsFamily.regular,
  },
  location: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    marginVertical: 2,
    fontFamily: fontsFamily.regular,
  },
  services: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
  },
  price: {
    fontSize: RFValue(12),
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontsFamily.regular,
    backgroundColor: colors.lightPrimary,
    paddingHorizontal: 5,
  },
  icon: {
    backgroundColor: colors.lightPrimary,
    // width: 30,
    // height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    padding: 6,
    borderRadius: 8,
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  cancelButton: {
    flex: 1,
    marginRight: 5,
    paddingVertical: 10,
    backgroundColor: colors.lightPink,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  cancelText: {
    fontSize: RFValue(12),
    color: colors.primary,
    fontFamily: fontsFamily.regular,
  },
  rescheduleButton: {
    flex: 1,
    marginLeft: 5,
    paddingVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  rescheduleText: {
    fontSize: RFValue(12),
    color: '#fff',
    fontFamily: fontsFamily.regular,
  },
});

export default BookingHistoryCard;
