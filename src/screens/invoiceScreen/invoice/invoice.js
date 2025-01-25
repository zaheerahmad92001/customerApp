import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import images from '../../../assets/images';
import Header from '../../../components/appHeader';
import DetailRow from '../../../components/DetailRow';
import PricingDetails from '../../../components/pricingDetail/pricingDetail';
import SalonCard from '../../../components/salonCard/salonCard';
import {dummyData, mockData} from '../../../staticData';

const Invoice = () => {
  const renderSalonCard = ({item}) => (
    <SalonCard
      image={item.image}
      title={item.title}
      location={item.location}
      distance={item.distance}
      rating={item.rating}
      reviews={item.reviews}
      onFavorite={() => handleFavoritePress(item.id)}
      showFavoriteButton={false}
      position={item.position}
    />
  );

  const handlePrint = () => {
    console.log('Print button pressed');
  };

  const handleDownload = () => {
    console.log('Download button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Invoice'} showBackButton />
      <ScrollView>
        <View>
          <FlatList
            data={mockData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderSalonCard}
            contentContainerStyle={styles.list}
            nestedScrollEnabled
          />
        </View>
        <View style={styles.content}>
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

            <View style={styles.horizontalLine} />

            <PricingDetails data={dummyData} />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.printButton} onPress={handlePrint}>
              <Text style={styles.buttonTextPrint}>Print</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={handleDownload}>
              <Text style={styles.buttonTextDownload}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  serviceDetails: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: colors.inputGray,
    borderStyle: 'dashed',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: colors.gray,
    marginVertical: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    paddingTop: 15,
  },
  printButton: {
    flex: 1,
    backgroundColor: '#FDEDF1',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  downloadButton: {
    flex: 1,
    backgroundColor: '#D9A6AF',
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  buttonTextDownload: {
    color: colors.white,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
  },
  buttonTextPrint: {
    color: colors.primary,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
  },
  list: {
    backgroundColor: colors.white,
    paddingBottom: 16,
  },
});

export default Invoice;
