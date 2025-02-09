import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useCallback, useReducer, useRef} from 'react';
import BookingHistoryCard from '../../components/bookingHistoryCard/bookingHistoryCard';
import images from '../../assets/images';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import {widthPercentageToDP as wp,heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import CancelBooking from '../../components/modal/cancelBooking';
import { BottomSheet } from '../../components/bottomSheet';

const BookingHistory = ({navigation , route}) => {
  const refRBSheet = useRef();

      const [state, updateState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
          selectedItem:null,
        },
      );
      const {selectedItem} = state;

  const cancelBooking = useCallback(()=>{
    hideBottomSheet()
    setTimeout(() => {
      navigation.navigate('successScreen',{actionName:'cancel'})
    }, 200);
  },[navigation])
  

  const handleReschedule = (item) => {
    // based on status will navigate to Book again or leave review screen 
    navigation.navigate('review')
  };

const openBottomSheet = useCallback((item) => {
      updateState({ selectedItem: item });
      if (refRBSheet.current) {
        setTimeout(() => refRBSheet.current.present(), 0);
      }
    }, [refRBSheet]);


  const hideBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };


  const renderItem = ({item}) => {
    return (
      <BookingHistoryCard
        date="Sep 10, 2024"
        time="9:10 AM"
        title="Hair Avenue"
        location="Lakewood, California "
        services="Services: Hair Cut, Hair Wash"
        price="SAR 200"
        status="Completed"
        imageUri={images.room}
        bookinOptions={openBottomSheet}
        reviewAndReschedule={()=>handleReschedule(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Booking History'} showBackButton onBackPress={()=>navigation.goBack()} />
        <View style={styles.contentContainer}>
      <View style={styles.wrapper}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={renderItem}
          contentContainerStyle={{paddingTop: hp(2)}}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      </View>

      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() =>hideBottomSheet()}
        scrollEnabled={false}
        disableDynamicSizing={false}
        height={heightPercentageToDP(35)}
      >
         <CancelBooking 
         onCancel={hideBottomSheet}
         onAgree={cancelBooking} />
      </BottomSheet>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer:{
    flex:1,
    backgroundColor:colors.appBG,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
});

export default BookingHistory;
