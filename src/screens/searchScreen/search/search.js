import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './search.styles';
import images from '../../../assets/images';
import SalonCard from '../../../components/salonCard/salonCard';
import Close from '../../../assets/svgs/close.svg';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Search from '../../../components/search';

const SearchScreen = () => {
  const [recentSearches, setRecentSearches] = useState([
    'Beauty Unleashed',
    'Big Hair We Care',
    'Addictive Beauty',
    "Alexandra's Salon",
  ]);
  // const [searchText, setSearchText] = useState('');
  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  // const [isInputActive, setIsInputActive] = useState(false);

  const renderSearchItem = ({item}) => (
    <View style={styles.searchItem}>
      <Text style={styles.searchText}>{item}</Text>
      <TouchableOpacity
        style={styles.removeIcon}
        // onPress={() => handleRemoveSearch(item)}
      >
        <Close />
      </TouchableOpacity>
    </View>
  );

  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };

  const mockData = [
    {
      id: 1,
      image: images.room, // Replace with your image path
      title: 'Hair Avenue',
      location: 'Lakewood, California',
      distance: '2 km',
      rating: 4.7,
      reviews: 312,
    },
    {
      id: 2,
      image: images.room, // Replace with your image path
      title: 'Beauty Unleashed',
      location: 'Downtown, New York',
      distance: '1.5 km',
      rating: 4.9,
      reviews: 450,
    },
  ];

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
        <Search />

        {/* Horizontat Line */}
        <View style={styles.horizontalLine} />

        <>
          <Text style={styles.recentSearchTitle}>Recent search</Text>
          <FlatList
            data={filteredSearches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderSearchItem}
            contentContainerStyle={styles.recentSearchList}
            nestedScrollEnabled
          />
        </>

        <View style={{flex: 1}}>
          <View style={styles.searchResultView}>
            <Text style={styles.recentSearch}>
              Results "<Text style={styles.searchTextTitle}>Salon</Text>"
            </Text>
            <Text style={styles.searchesFound}>12,324 found</Text>
          </View>
          <View style={styles.searchResultView}>
            <Text style={styles.map}>View on Map</Text>
            <TouchableOpacity style={styles.button}>
              <Image source={images.map} />
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
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
