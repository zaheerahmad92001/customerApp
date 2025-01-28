import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {XlargeText} from '../Typography';
import {Divider} from 'react-native-paper';
import {mockData} from '../../staticData';
import SalonCard from '../salonCard/salonCard';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import { AppButton } from '../appButton';

const FavoriteModal = ({fvrtButton, removeButton, cancelButton}) => {
  const renderSalonCard = ({item}) => (
    <SalonCard
      image={item.image}
      title={item.title}
      location={item.location}
      distance={item.distance}
      rating={item.rating}
      reviews={item.reviews}
      onFavorite={fvrtButton}
      showFavoriteButton={true}
      selected={true}
    />
  );
  return (
    <View>
      <XlargeText text={'Remove from Favorites?'} style={styles.heading} />
      <Divider style={styles.divider} />

      <FlatList
        data={mockData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderSalonCard}
        contentContainerStyle={styles.list}
        nestedScrollEnabled
      />

      <View style={styles.buttonContainer}>
        <AppButton
          title={'Cancel'}
          onPress={cancelButton}
          style={styles.cancelButton}
          textstyle={styles.cancelText}
        />
        <AppButton
          title={'Remove'}
          onPress={removeButton}
          style={styles.yesButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
  },
  divider: {
    borderWidth: 0.1,
    marginTop: 2,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yesButton: {
    marginTop: 10,
    width: '48%',
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: colors.lightPrimary,
    borderWidth: 0,
    width: '48%',
  },
  cancelText: {
    color: colors.primary,
  },
});

export default FavoriteModal;
