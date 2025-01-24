import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Heart from '../../assets/svgs/heart.svg';
import LocationMarker from '../../assets/svgs/locationMarker.svg';
import Star from '../../assets/svgs/star.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';

const SalonCard = ({
  image,
  title,
  location,
  distance,
  rating,
  reviews,
  onFavorite,
  showFavoriteButton = false,
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
              {rating} ({reviews})
            </Text>
          </View>
          {showFavoriteButton && (
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={onFavorite}>
              <Heart />
              {/* <Icon name="heart-o" size={18} color="#aaa" /> */}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor:colors.white,
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    borderColor: colors.gray,
    borderWidth: 0.3,
    // For Android shadow
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    // margin: 5,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardLocation: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
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
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
  },
  distanceText: {
    fontSize: 14,
    color: '#666',
  },
  favoriteButton: {
    padding: 8,
    backgroundColor: '#f5f5f5',
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
    marginTop: 2,
  },
});

export default SalonCard;
