import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import Search from '../../../components/search';
import {mockData, recentSearches} from '../../../staticData';
import {ImageBackground} from 'react-native';
import images from '../../../assets/images';
import {RFValue} from 'react-native-responsive-fontsize';
import SalonCard from '../../../components/salonCard/salonCard';

const categories = [
  {id: 1, name: 'Salon', icon: images.salon},
  {id: 2, name: 'Spa', icon: images.spa},
  {
    id: 3,
    name: 'Nail Art',
    icon: images.nail,
  },
  {
    id: 4,
    name: 'Salon & Spa',
    icon: images.salonSpa,
  },
];

const HomeScreen = () => {
  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  const [isInputActive, setIsInputActive] = useState(false);

  const renderCategory = ({item}) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

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
      <View style={styles.wrapper}>
        <Search
          setFilteredSearches={setFilteredSearches}
          setIsInputActive={setIsInputActive}
        />

        <ImageBackground
          source={images.customers}
          style={styles.headerBackground}>
          <View style={styles.headerCard}>
            <Text style={styles.headerText}>Morning Special!</Text>
            <Text style={styles.discountText}>Get 20% Off</Text>
            <Text style={styles.subText}>
              Limited-time offers on all services
            </Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby Venues</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

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
  },
  wrapper: {
    paddingHorizontal: wp(4),
    flex: 1,
    marginTop: 10,
  },
  headerBackground: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  headerCard: {
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontFamily: fontsFamily.bold,
    color: colors.white,
  },
  discountText: {
    fontSize: 24,
    fontFamily: fontsFamily.bold,
    color: colors.white,
  },
  subText: {
    fontSize: 14,
    fontFamily: fontsFamily.regular,
    color: colors.gray,
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: fontsFamily.medium,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fontsFamily.bold,
    color: colors.dark,
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: fontsFamily.medium,
    color: colors.primary,
  },
  categoriesContainer: {
    padding: 5,
  },
  categoryCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 80,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: RFValue(8),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
  },
  placeholderContainer: {
    padding: 20,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 14,
    fontFamily: fontsFamily.regular,
    color: colors.gray,
  },
});

export default HomeScreen;
