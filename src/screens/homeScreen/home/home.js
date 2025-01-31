import React, {useCallback, useReducer, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Search from '../../../components/search';
import {mockData, recentSearches} from '../../../staticData';
import images from '../../../assets/images';
import SalonCard from '../../../components/salonCard/salonCard';
import {LargeText, SmallText} from '../../../components/Typography';
import styles from './home.styles';
import HomeHeader from '../../../components/homeHeader';
import GooglePlacesModal from '../../../components/modal/google-places-modal';
import TopRatedVenus from '../../../components/topRatedVenus';

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
  const [location, setLocation] = useState('');

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      isModalVisible: false,
    },
  );
  const {isModalVisible} = state;

  console.log('location is', location);
  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };

  const renderCategory = ({item}) => (
    <TouchableOpacity style={styles.categoryCard}>
      <View style={styles.catImageContainer}>
        <Image
          source={item.icon}
          resizeMode="contain"
          style={styles.categoryIcon}
        />
      </View>
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

  const openLocationModal = useCallback(() => {
    updateState({isModalVisible: true});
  }, []);

  const toggleModal = useCallback(() => {
    updateState({isModalVisible: !isModalVisible});
  }, [isModalVisible]);

const renderTopRatedVenus = ({item , index}) => {
return(
  <TopRatedVenus />)
}


  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader onLocationPress={openLocationModal} location={location} />
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Search
            setFilteredSearches={setFilteredSearches}
            setIsInputActive={setIsInputActive}
            isHome={true}
          />
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={images.customers}
                resizeMode="contain"
                style={styles.image}
              />
            </View>

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
          </View>

          <View style={styles.sectionHeader}>
            <LargeText text={'Categories'} style={styles.sectionTitle} />
            <TouchableOpacity>
              <SmallText text={'See All'} style={styles.seeAllText} />
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              contentContainerStyle={{gap:10}}
              // numColumns={4}
              // scrollEnabled={false}
              // columnWrapperStyle={styles.categoryRow}
            />
          </View>

          <View style={styles.sectionHeader}>
            <LargeText text={'Nearby Venues'} style={styles.sectionTitle} />
            <TouchableOpacity>
              <SmallText text={'See All'} style={styles.seeAllText} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={mockData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderSalonCard}
            contentContainerStyle={styles.list}
            scrollEnabled={false}
          />

          <View style={styles.sectionHeader}>
            <LargeText text={'Top Rated Venues'} style={styles.sectionTitle} />
            <TouchableOpacity>
              <SmallText text={'See All'} style={styles.seeAllText} />
            </TouchableOpacity>
          </View>

<FlatList
data={[1,2,3,4,5,6,7,8,9,10]}
horizontal={true}
renderItem={renderTopRatedVenus}
contentContainerStyle={{gap:10}}
showsHorizontalScrollIndicator={false}
/>

          {/* <View style={{flexDirection: 'row', gap:10,}}>
          <TopRatedVenus />
          <TopRatedVenus />
          </View> */}

          

          <View style={styles.sectionHeader}>
            <LargeText
              text={'Recommended Venues'}
              style={styles.sectionTitle}
            />
            <TouchableOpacity>
              <SmallText text={'See All'} style={styles.seeAllText} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={mockData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderSalonCard}
            contentContainerStyle={styles.list}
            scrollEnabled={false}
          />
        </ScrollView>
      </View>
      <GooglePlacesModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        setLocation={setLocation}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
