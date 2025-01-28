import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {mockData} from '../../staticData';
import SalonCard from '../../components/salonCard/salonCard';
import colors from '../../assets/colors';
import Header from '../../components/appHeader';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ModalComponent from '../../components/modal';
import {XlargeText} from '../../components/Typography';
import {Divider} from 'react-native-paper';
import {AppButton} from '../../components/appButton';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import FavoriteModal from '../../components/modal/favoriteModal';
import RatingModal from '../../components/modal/ratingModal';

const Favorites = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
    setIsVisible(true);
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
      <ModalComponent
        visible={isVisible}
        onClose={() => {
          setIsVisible(false);
        }}>
        <FavoriteModal cancelButton={() => setIsVisible(false)} />
        {/* <RatingModal /> */}
      </ModalComponent>
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
