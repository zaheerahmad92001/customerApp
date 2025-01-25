import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {mockData} from '../../../staticData';
import SalonCard from '../../../components/salonCard/salonCard';

const Favorites = () => {
  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };
  const renderSalonCard = ({item}) => (
    <SalonCard
      image={item.image}
      title={item.title}
      location={item.location}
      distance={item.distance}
      rating={item.rating}
      reviews={item.reviews}
      onFavorite={() => handleFavoritePress(item.id)}
      showFavoriteButton={true}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderSalonCard}
        contentContainerStyle={styles.list}
        nestedScrollEnabled
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Favorites;
