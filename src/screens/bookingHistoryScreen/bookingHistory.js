import React, {useCallback, useReducer, useRef} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './bookingHistory.style';
import Header from '../../components/appHeader';
import {FlatList} from 'react-native-gesture-handler';
import BookingHistoryCard from '../../components/bookingHistoryCard/bookingHistoryCard';
import {bookingHistory} from '../../staticData';
import {BottomSheet} from '../../components/bottomSheet';
import CancelBooking from '../../components/modal/cancelBooking';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const BookingHistory = ({navigation, route}) => {
  const refRBSheet = useRef();
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

  const handleBookAgain = item => {

    const isComplete = item.status === 'Completed';
    const isPending = item.status === 'Pending';
    const isConfirmed = item.status === 'Confirmed';

    if (isComplete) {
      navigation.navigate('availableTimeSlot', {item, isReschedule: false});
    } else if (isPending || isConfirmed) {
      openBottomSheet();
    }
  };

  const handleReviewAndReschedule = item => {
    const isComplete = item.status === 'Completed';
    const isPending = item.status === 'Pending';
    const isConfirmed = item.status === 'Confirmed';

    if (isComplete) {
      navigation.navigate('review');
    } else if (isPending || isConfirmed) {
      navigation.navigate('availableTimeSlot', {item, isReschedule: true});
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <BookingHistoryCard
        item={item}
        bookingOptions={()=>handleBookAgain(item)}
        reviewAndReschedule={() => handleReviewAndReschedule(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Booking Histry'}
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.wrapper}>
          <FlatList
            data={bookingHistory}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </View>
      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() => hideBottomSheet()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={heightPercentageToDP(35)}>
        <CancelBooking onCancel={hideBottomSheet} onAgree={onAgreePress} />
      </BottomSheet>
    </SafeAreaView>
  );
};
export default BookingHistory;
