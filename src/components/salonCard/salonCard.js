import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.distanceText}>{distance}</Text>
        </View>
        <Text style={styles.cardLocation}>
          <Icon name="map-marker" size={14} color="#aaa" /> {location}
        </Text>
        <View style={styles.cardFooter}>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFC107" />
            <Text style={styles.ratingText}>
              {rating} ({reviews})
            </Text>
          </View>
          {showFavoriteButton && (
            <TouchableOpacity style={styles.favoriteButton} onPress={onFavorite}>
              <Icon name="heart-o" size={18} color="#aaa" />
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    // For Android shadow
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    margin:5
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
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
    borderRadius: 50,
    marginLeft: 8,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SalonCard;
