import {
  View,
  Alert,
  Pressable,
} from 'react-native';
import React, {useCallback, useReducer, useRef} from 'react';
import {serviceData, staticBookings} from '../../staticData';
import ServiceCard from '../../components/serviceCard/serviceCard';
import Header from '../../components/appHeader';
// import DropdownComponent from '../../components/dropdownComponent/dropdownComponent';
import MyDropdown from '../../components/dropdown/dropdown';
import BookingCard from '../../components/bookindDetailComponent/bookingDetailComponent';
import {AppButton} from '../../components/appButton';
import PaymentMethodComponent from '../../components/paymentMethodComponent/paymentMethodComponent';
import CouponInput from '../../components/couponInputComponent/couponInputComponent';
import styles from './orderDetail.style';
import {MediumText, SmallText} from '../../components/Typography';
import {BottomSheet} from '../../components/bottomSheet';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextField from '../../components/textField/textField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CreditCardModal from '../../components/modal/creditCarddModal';
import CodeDiscount from '../../components/modal/discounts';
import BillDetail from '../../components/billDetail';;
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LoyalityPoints from '../../components/loyaltyPoints';

const items = [
  {label: 'Option A', value: '1'},
  {label: 'Option B', value: '2'},
  {label: 'Option C', value: '3'},
  {label: 'Option D', value: '4'},
  {label: 'Option E', value: '5'},
];

const OrderDetail = ({navigation, route}) => {
  const refRBSheet = useRef();
  const insets = useSafeAreaInsets();

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {selected: '', sheetName: '', notes: '', selectedValue: null},
  );

  const {selected, sheetName, notes, selectedValue} = state;

  const handleSelect = value => {
    updateState({selected: value});
    // You can also perform additional actions here
  };

  const handlePaymentSelect = method => {
    if (method.key === 'creditCard') {
      setTimeout(() => {
        openBottomSheet();
      }, 200);
      updateState({sheetName: 'payment'});
    }
  };

  const handleApplyCoupon = code => {
    Alert.alert('Coupon Applied', `You entered: ${code}`);
  };

  const openBottomSheet = useCallback(
    item => {
      if (refRBSheet.current) {
        refRBSheet.current.present();
      }
    },
    [refRBSheet],
  );

  const hideBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
      updateState({sheetName: ''});
    }
  };

  const handleBooking=()=>{
    navigation.navigate('successScreen', {actionName: 'booking'});
  }

  return (
    <View style={[styles.container,{paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      <Header
        title={'Order Detail'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView
        style={styles.wrapper}
        showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <ServiceCard item={serviceData[0]} style={styles.card} />

          <SmallText text={'Book For'} style={styles.label} />
          <MyDropdown
            data={items}
            value={selectedValue}
            onChange={item => updateState({selectedValue: item.value})}
            placeholder="Select Type"
          />
        </View>

        {/* <DropdownComponent
            label="For Myself"
            options={['Option A', 'Option B', 'Option C']}
            onSelect={handleSelect}
          /> */}

        {staticBookings.map((booking, index) => (
          <BookingCard key={index} item={booking} />
        ))}

        <CouponInput onApply={handleApplyCoupon} />

        <Pressable onPress={openBottomSheet} style={styles.subContainer}>
          <SmallText text={'Enter Code'} style={styles.couponText} />
        </Pressable>

        <LoyalityPoints/>

        <PaymentMethodComponent onSelect={handlePaymentSelect} />

        <View style={[styles.subContainer, {marginTop: hp(1.5), marginBottom:hp(2)}]}>
          <MediumText text="Notes" style={{marginBottom: hp(0.3)}} />
          <TextField
            placeholder={'Your review here'}
            multiline
            value={notes}
            style={styles.inputStyle}
            inputStyle={styles.inputStyle}
            onChangeText={value => updateState({notes: value})}
          />
        </View>
      </KeyboardAwareScrollView>

      <View style={[styles.billView]}>
        <BillDetail item={staticBookings[0]}/>
        <AppButton title={'Proceed (SAR 172.50)'} onPress={handleBooking}  style={{marginBottom: hp(1)}}/>
      </View>

      <BottomSheet
        title={sheetName === 'payment' ? 'Select Card' : 'Codes & discount'}
        refRBSheet={refRBSheet}
        onClose={() => hideBottomSheet()}
        scrollEnabled={true}
        disableDynamicSizing={true}
        removeSheetScrolllView={false}
        height={hp(45)}>
        {sheetName === 'payment' ? (
          <CreditCardModal list={[1, 2, 4]} isSheet={true} />
        ) : (
          <CodeDiscount onApply={() => {}} />
        )}
      </BottomSheet>
    </View>
  );
};

export default OrderDetail;
