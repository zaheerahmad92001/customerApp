import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import images from '../../../assets/images';
import DetailRow from '../../../components/DetailRow';
import TextField from '../../../components/textField/textField';

const NotificationInvoice = () => {
  const [reason, setReason] = useState(
    'No longer able to attend the appointment',
  );
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={{textAlign: 'center'}}>Header</Text>
      <View style={styles.header}>
        <Image
          source={images.room} // Replace with your image URL
          style={styles.image}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.salonName}>Hair Avenue</Text>
          <Text style={styles.serviceName}>Hair cut</Text>
          <Text style={styles.dateTime}>Sep 10, 2024 - 9:10 AM</Text>
        </View>
        <View style={styles.refundContainer}>
          <Text style={styles.refundDate}>02/04/2023</Text>
          <Text style={styles.refundAmount}>SAR 200</Text>
          <Text style={styles.refundText}>Refund</Text>
        </View>
      </View>

      {/* Service Details */}
      <View style={styles.serviceDetails}>
        <DetailRow
          label="Invoice No"
          value="65548910"
          image={images.invoiceTick}
        />
        <DetailRow label="Salon" value="Hair Avenue" image={images.shop} />
        <DetailRow label="Service" value="Facial" image={images.service} />
        <DetailRow
          label="Dates"
          value="Wed, 03 Jan 2024"
          image={images.calendar}
        />
        <DetailRow label="Time" value="01:00 AM" image={images.clock} />
        <DetailRow
          image={images.document}
          label="Notes"
          value="Lorem ipsum dolor sit amet consectetur. pretium etiam."
        />
        {/* Total Price */}
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceLabel}>Total price</Text>
          <Text style={styles.totalPriceValue}>SAR 210</Text>
        </View>
      </View>

      {/* Reason */}
      <View style={styles.reasonContainer}>
        <TextField label={'Reason'} placeholder={'Enter Reason'} value={"Hello"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
    margin: 5,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  salonName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: fontsFamily.regular,
  },
  serviceName: {
    fontSize: 14,
    color: '#666',
    fontFamily: fontsFamily.regular,
  },
  dateTime: {
    fontSize: 12,
    color: '#999',
    fontFamily: fontsFamily.regular,
  },
  refundContainer: {
    alignItems: 'flex-end',
  },
  refundAmount: {
    fontSize: 12,
    fontWeight: '500',
    color: 'red',
    fontFamily: fontsFamily.regular,
    backgroundColor: colors.primaryLite,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  refundText: {
    fontSize: 12,
    color: 'red',
    fontFamily: fontsFamily.regular,
  },
  refundDate: {
    fontSize: 12,
    fontFamily: fontsFamily.regular,
  },
  serviceDetails: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
    margin: 5,
    padding: 10,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  totalPriceLabel: {
    fontSize: 14,
    color: '#666',
    fontFamily: fontsFamily.regular,
  },
  totalPriceValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: fontsFamily.regular,
  },
  reasonContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  reasonValue: {
    fontSize: 14,
    color: '#333',
    fontFamily: fontsFamily.regular,
  },
  reasonInput: {
    fontSize: 14,
    color: '#333',
    fontFamily: fontsFamily.regular,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 8,
    textAlignVertical: 'top', // Ensures proper alignment for multiline text
  },
});

export default NotificationInvoice;
