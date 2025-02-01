import React, {useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import DetailRow from '../../../components/DetailRow';
import styles from './notificationDetail.styles';
import {invoiceDetailRows, mockData} from '../../../staticData';
import Header from '../../../components/appHeader';
import SalonCard from '../../../components/salonCard/salonCard';
import {
  MediumText,
  SmallText,
} from '../../../components/Typography';

const NotificationDetail = ({navigation, route}) => {
  const renderItem = ({item, index}) => {
    return (
      <DetailRow label={item.label} value={item.value} Icon={item.image} />
    );
  };

  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title="Notification"
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          <SalonCard
            image={mockData[0].image}
            title={mockData[0].title}
            location={mockData[0].location}
            distance={mockData[0].distance}
            rating={mockData[0].rating}
            reviews={mockData[0].reviews}
            onFavorite={() => handleFavoritePress(mockData[0].id)}
            showFavoriteButton={false}
            position={mockData[0].position}
            isNotificaiton={true}
          />

          <View style={styles.serviceDetails}>
            <MediumText text={'Your Service'} style={styles.smallText} />
            <FlatList
              data={invoiceDetailRows}
              renderItem={renderItem}
              scrollEnabled={false}
              keyExtractor={item => item.value}
              showsVerticalScrollIndicator={false}
            />

            <View style={styles.totalPriceContainer}>
              <MediumText text={'Total Price'} />
              <MediumText text={'SAR 210'} />
            </View>
          </View>

          <MediumText text={'Reason'} style={styles.reasonText} />
          <View style={styles.reasonContainer}>
            <SmallText
              text={'The salon canceled the appointment.'}
              style={styles.reasonValue}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationDetail;
