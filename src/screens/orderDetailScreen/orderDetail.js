import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
  Pressable,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {serviceData, staticBookings} from '../../staticData';
import ServiceCard from '../../components/serviceCard/serviceCard';
import Header from '../../components/appHeader';
// import DropdownComponent from '../../components/dropdownComponent/dropdownComponent';
import MyDropdown from '../../components/dropdown/dropdown';
import images from '../../assets/images/index';
import BookingCard from '../../components/bookindDetailComponent/bookingDetailComponent';
import {AppButton} from '../../components/appButton';
import PaymentMethodComponent from '../../components/paymentMethodComponent/paymentMethodComponent';
import CouponInput from '../../components/couponInputComponent/couponInputComponent';
import styles from './orderDetail.style';
import {MediumText, SmallText} from '../../components/Typography';
import {BottomSheet} from '../../components/bottomSheet';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextField from '../../components/textField/textField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalComponent from '../../components/modal';
import CreditCardModal from '../../components/modal/creditCarddModal';

const items = [
  {label: 'Option A', value: '1'},
  {label: 'Option B', value: '2'},
  {label: 'Option C', value: '3'},
  {label: 'Option D', value: '4'},
  {label: 'Option E', value: '5'},
];

const OrderDetail = ({navigation, route}) => {
  const refRBSheet = useRef();
  const modalRef = useRef();
  const [selected, setSelected] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = value => {
    setSelected(value);
    // You can also perform additional actions here
  };

  const handlePaymentSelect = method => {
    if(method.key==='creditCard'){
      openBottomSheet();
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
    }
  };

  const openModal = () => {
    if (modalRef?.current) {
      modalRef.current.open();
    } else {
    }
  };
  
  const closeModal = () => {
    if (modalRef?.current) {
      modalRef.current.close();
    } else {
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
            onChange={item => setSelectedValue(item.value)}
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

          <PaymentMethodComponent onSelect={handlePaymentSelect} />

          <View style={[styles.subContainer,{marginTop:hp(1.5)}]}>
          <MediumText
            text="Notes"
            style={{marginBottom: hp(0.3)}}
          />
          <TextField
            placeholder={'Your review here'}
            multiline
            value={notes}
            style={styles.inputStyle}
            inputStyle={styles.inputStyle}
            onChangeText={setNotes}
          />
          </View>
      </KeyboardAwareScrollView>

      <View style={[styles.subContainer,{marginBottom:hp(1)}]}>
         <AppButton title={'Proceed (SAR 172.50)'}/>
      </View>

      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() => hideBottomSheet()}
        scrollEnabled={true}
        disableDynamicSizing={true}
        removeSheetScrolllView={false}
        height={hp(50)}>
         <CreditCardModal
        list={[1,2,4]}
        />
      </BottomSheet>

      {/* <ModalComponent
       ref={modalRef}
        onClose={closeModal}>
        <CreditCardModal
        list={[1,2,4]}
        />
      </ModalComponent> */}
    </SafeAreaView>
  );
};

export default OrderDetail;
