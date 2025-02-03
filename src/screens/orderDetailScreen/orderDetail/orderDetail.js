import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {serviceData, staticBookings} from '../../../staticData';
import ServiceCard from '../../../components/serviceCard/serviceCard';
import Header from '../../../components/appHeader';
import DropdownComponent from '../../../components/dropdownComponent/dropdownComponent';
import images from '../../../assets/images/index';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';
import BookingCard from '../../../components/bookindDetailComponent/bookingDetailComponent';
import {AppButton} from '../../../components/appButton';
import PaymentMethodComponent from '../../../components/paymentMethodComponent/paymentMethodComponent';
import CouponInput from '../../../components/couponInputComponent/couponInputComponent';

const OrderDetail = () => {
  const [selected, setSelected] = useState('');

  const handleSelect = value => {
    setSelected(value);
    // You can also perform additional actions here
  };

  const handlePaymentSelect = method => {
    console.log('Selected Payment Method:', method);
  };

  const handleApplyCoupon = (code) => {
    Alert.alert('Coupon Applied', `You entered: ${code}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Order Detail'} showBackButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <ServiceCard
            image={images.room}
            title={'Plumbing Service'}
            location={'Brooklyn, NY'}
            date={'2024-02-04'}
            service={'Pipe Repair'}
            professional={'Jane Smith'}
            distance={'3.8 miles'}
          />
        </View>

        <Text style={styles.label}>Book For</Text>
        <View>
          <DropdownComponent
            label="For Myself"
            options={['Option A', 'Option B', 'Option C']}
            onSelect={handleSelect}
          />
        </View>

        {staticBookings.map((booking, index) => (
          <BookingCard key={index} {...booking} />
        ))}

        <CouponInput onApply={handleApplyCoupon} />
        <AppButton title={'Proceed (SAR 172.50)'} />

        <PaymentMethodComponent onSelect={handlePaymentSelect} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  label: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
  },
});

export default OrderDetail;
