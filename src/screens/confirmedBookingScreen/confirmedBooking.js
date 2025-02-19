import {FlatList, StyleSheet, View} from 'react-native';
import React, { useCallback, useReducer, useRef } from 'react';
import BookingHistoryCard from '../../components/bookingHistoryCard/bookingHistoryCard';
import images from '../../assets/images';
import { heightPercentageToDP, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { BottomSheet } from '../../components/bottomSheet';
import CancelBooking from '../../components/modal/cancelBooking';

const data = {
  date: 'Sep 10, 2024',
  time: '9:10 AM',
  title: 'Hair Avenue',
  location: 'Lakewood, California',
  services: 'Services: Hair Cut, Hair Wash',
  price: 'SAR 200',
  status: 'Confirmed',
  imageUri: images.room,
};

const ConfirmedBooking = () => {

 const refRBSheet = useRef();
   const navigation = useNavigation();
 
   const [state, updateState] = useReducer(
     (state, newState) => ({...state, ...newState}),
     {
       selectedItem: null,
     },
   );
   const {selectedItem} = state;
 
   const onAgreePress = useCallback(() => {
     hideBottomSheet();
     setTimeout(() => {
       navigation.navigate('successScreen', {actionName: 'cancel'});
     }, 200);
   }, [navigation]);
 
   const openBottomSheet = useCallback(
     item => {
       updateState({selectedItem: item});
       if (refRBSheet.current) {
         setTimeout(() => refRBSheet.current.present(), 0);
       }
     },
     [refRBSheet],
   );
 
   const hideBottomSheet = () => {
     if (refRBSheet.current) {
       refRBSheet.current.close();
     }
   };
 
   const handleReschedule = item => {
     navigation.navigate('availableTimeSlot', {item , isReschedule:true});
   };


  const renderItem = ({item, index}) => {
    return (
      <BookingHistoryCard
        item={data}
        bookingOptions={openBottomSheet}
        reviewAndReschedule={() => handleReschedule(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
    />
     <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() => hideBottomSheet()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={heightPercentageToDP(35)}>
        <CancelBooking onCancel={hideBottomSheet} onAgree={onAgreePress} />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  contentContainerStyle: {
    paddingTop: hp(1),
  },
});

export default ConfirmedBooking;
