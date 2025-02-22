import React, {useReducer, useRef, useState } from 'react';
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
import { mockData, recentSearches, venueList } from '../../../staticData';
import images from '../../../assets/images';
import SalonCard from '../../../components/salonCard/salonCard';
import { LargeText, SmallText, XlargeText } from '../../../components/Typography';
import styles from './home.styles';
import HomeHeader from '../../../components/homeHeader';
import GooglePlacesModal from '../../../components/modal/google-places-modal';
import TopRatedVenus from '../../../components/topRatedVenus';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import SalonFilterCard from '../../../components/modal/filterCard';
import ModalComponent from '../../../components/modal';

const categories = [
  { id: 1, title: 'Salon', icon: images.salon },
  { id: 2, title: 'Spa', icon: images.spa },
  {
    id: 3,
    title: 'Nail Art',
    icon: images.nail,
  },
  {
    id: 4,
    title: 'Salon & Spa',
    icon: images.salonSpa,
  },
];

const HomeScreen = ({ navigation, route }) => {
  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  const [isInputActive, setIsInputActive] = useState(false);
  const [location, setLocation] = useState('');
  const modalRef = useRef()
  const locationModalRef = useRef();

  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      isModalVisible: false,
      isVisible: false,
    },
  );
  const { isModalVisible,isVisible } = state;
 
  const openModal = () => {
    if(modalRef?.current){
      modalRef.current.open()
    }
  };
  const closeModal = () => {
    if(modalRef?.current){
      modalRef.current.close()
    }
  };

  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
    onPress={()=>navigation.navigate('categoryProducts',{item})} 

    style={styles.categoryCard}>
      <View style={styles.catImageContainer}>
        <Image
          source={item.icon}
          resizeMode="contain"
          style={styles.categoryIcon}
        />
      </View>
      <SmallText text={item.title} style={styles.categoryText} />
    </TouchableOpacity>
  );

  const renderVenues = ({ item }) => (
    <SalonCard
      item={item}
      handleOnPress={()=>handleNavigation('detail',{item})}
      onFavorite={() => handleFavoritePress(item.id)}
      showFavoriteButton={true}
    />
  );

  const openLocationModal = () => {
    if(locationModalRef?.current){
      locationModalRef.current.open()
    }
  };


  const renderTopRatedVenus = ({ item, index }) => {
    return( 
    <TopRatedVenus 
    handleOnPress={() => handleNavigation('detail', {item})}
    onFavorite={()=>{}}
    />)
  };

  const handleNavigation = (screen, params = {}) => {
    navigation.navigate(screen, params);
  };


  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader
        onNotificationPress={()=>handleNavigation('notificationStack', { screen: 'notifications' })}
        onFavoritePress={() => handleNavigation('favorites')}
        onLocationPress={openLocationModal}
        location={location}
      />
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginVertical: heightPercentageToDP(2) }}>
              <Search
                setFilteredSearches={setFilteredSearches}
                setIsInputActive={setIsInputActive}
                handleOnPress={() => handleNavigation('location', { params: location })}
                isHome={true}
              />
            </View>
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
                <TouchableOpacity onPress={openModal} style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.sectionHeader}>
              <XlargeText text={'Categories'} style={styles.sectionTitle} />
              <TouchableOpacity onPress={() => handleNavigation('categories')}>
                <SmallText text={'See All'} style={styles.seeAllText} />
              </TouchableOpacity>
            </View>

            <View>
              <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                contentContainerStyle={{ gap: 10 }}
              />
            </View>

            <View style={styles.sectionHeader}>
              <LargeText text={venueList.nearBy} style={styles.sectionTitle} />
              <TouchableOpacity onPress={() => handleNavigation('VenueList',{title:venueList.nearBy})}>
                <SmallText text={'See All'} style={styles.seeAllText} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={mockData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderVenues}
              contentContainerStyle={styles.list}
              scrollEnabled={false}
            />

            <View style={styles.sectionHeader}>
              <LargeText text={venueList.topRated} style={styles.sectionTitle} />
              <TouchableOpacity onPress={() => handleNavigation('VenueList',{title:venueList.topRated})}>
                <SmallText text={'See All'} style={styles.seeAllText} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              horizontal={true}
              renderItem={renderTopRatedVenus}
              contentContainerStyle={{ gap: 10 }}
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.sectionHeader}>
              <LargeText
                text={venueList.recommended}
                style={styles.sectionTitle}
              />
              <TouchableOpacity onPress={() => handleNavigation('VenueList',{title:venueList.recommended})}>
                <SmallText text={'See All'} style={styles.seeAllText} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={mockData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderVenues}
              contentContainerStyle={styles.list}
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
      </View>
      <GooglePlacesModal
       ref={locationModalRef}
       setLocation={setLocation}
      />

      <ModalComponent
        ref={modalRef}
        onClose={closeModal}>
        <SalonFilterCard
          onCancel={closeModal}
          onApply={() => {
            console.log('Apply')
          }}

        />
      </ModalComponent>
    </SafeAreaView>
  );
};

export default HomeScreen;
