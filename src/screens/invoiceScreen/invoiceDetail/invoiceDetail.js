import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import Header from '../../../components/appHeader';
import DetailRow from '../../../components/DetailRow';
import PricingDetails from '../../../components/pricingDetail/pricingDetail';
import SalonCard from '../../../components/salonCard/salonCard';
import {dummyData, invoiceDetailRows, mockData} from '../../../staticData';
import styles from './invoiceDetail.styles';
import {SmallText } from '../../../components/Typography';
import DottedLine from '../../../components/DottedHorizontalLine';
import { AppButton } from '../../../components/appButton';

const InvoiceDetail = () => {
  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };

  const handlePrint = () => {
    console.log('Print button pressed');
  };

  const handleDownload = () => {
    console.log('Download button pressed');
  };

  const renderItem=({item , index})=>{
    return(
      <DetailRow
      label={item.label}
      value={item.value}
      Icon={item.image}
    />
    )
  }

  const isCancelled = mockData[0].position === 'Cancelled' ? true: false;

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Invoice'} showBackButton />
      <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
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
        />
        <View style={styles.content}>
          <View style={styles.serviceDetails}>
           <SmallText text={'Your Service'} style={styles.smallText}/>
            <FlatList 
            data={invoiceDetailRows}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => item.value}
            showsVerticalScrollIndicator={false}
            />

            <DottedLine/>

            <PricingDetails data={dummyData} />
          </View>

          <View style={styles.buttonContainer}>
            <AppButton onPress={handlePrint} title={isCancelled? 'Later': 'Print'} style={styles.printButton} textstyle={styles.buttonTextPrint}/>
            <AppButton onPress={handleDownload} title={isCancelled?'Pay Now': 'Download'} style={styles.downloadButton} />
          </View>

        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvoiceDetail;
