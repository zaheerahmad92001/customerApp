import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Heart from '../../assets/svgs/heart.svg';
import HeartFilled from '../../assets/svgs/fill-heart.svg';
import LocationMarker from '../../assets/svgs/locationMarker.svg';
import Star from '../../assets/svgs/star.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import { MediumText } from '../Typography';

const SalonCard = ({
  image,
  title,
  location,
  distance,
  rating,
  reviews,
  onFavorite,
  showFavoriteButton = false,
  position,
  selected = false
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <Image source={image} style={styles.imageStyle} />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.distanceText}>{distance}</Text>
        </View>
        <View style={styles.locationContainer}>
          <LocationMarker />
          <Text style={styles.cardLocation}>{location}</Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.ratingContainer}>
            <Star />
            <Text style={styles.ratingText}>
              {rating}
            </Text>
            <Text style={styles.reviewText}>
              ({reviews})
            </Text>
          </View>
          {showFavoriteButton && (
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={onFavorite}>
                {selected ? <HeartFilled /> : <Heart />}
            </TouchableOpacity>
          )}
          {!showFavoriteButton && (
            <Text style={styles.position}>{position}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    borderColor: colors.gray,
    borderWidth: 0.3,
    // For Android shadow
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    margin: 5,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  imageStyle: {
    width: null,
    height: null,
    flex: 1,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: RFValue(13),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
    fontWeight:'600',
  },
  cardLocation: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    marginVertical: 4,
    fontFamily:fontsFamily.extraLight,
    fontWeight:'500',

  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: RFValue(12),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
    marginLeft: 4,
  },
  reviewText: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.extraLight,
    marginLeft: 4,
  },
  distanceText: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.extraLight,

  },
  favoriteButton: {
    padding: 8,
    backgroundColor: colors.inputGray,
    borderRadius: 7,
    marginLeft: 8,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  position: {
    color: colors.success,
    backgroundColor: colors.lightSuccess,
    paddingHorizontal: 12,
    borderRadius: 5,
    fontFamily: fontsFamily.regular,
  },
});

export default SalonCard;
