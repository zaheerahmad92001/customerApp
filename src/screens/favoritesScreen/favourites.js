import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {mockData} from '../../staticData';
import SalonCard from '../../components/salonCard/salonCard';
import colors from '../../assets/colors';
import Header from '../../components/appHeader';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
      selected={true}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Favorites'} showBackButton={true} />
      <View style={styles.wrapper}>
        <FlatList
          data={mockData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderSalonCard}
          contentContainerStyle={styles.list}
          nestedScrollEnabled
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
});

export default Favorites;
