import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import fontsFamily from '../../../assets/fontsFamily';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import images from '../../../assets/images';
import colors from '../../../assets/colors';
import SalonCard from '../../../components/salonCard/salonCard';

const SearchScreen = () => {
  const [recentSearches, setRecentSearches] = useState([
    'Beauty Unleashed',
    'Big Hair We Care',
    'Addictive Beauty',
    "Alexandra's Salon",
  ]);
  const [searchText, setSearchText] = useState('');
  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  const [isInputActive, setIsInputActive] = useState(false);

  const handleSearch = text => {
    setSearchText(text);

    if (text.trim() === '') {
      setFilteredSearches(recentSearches);
    } else {
      const filtered = recentSearches.filter(item =>
        item.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredSearches(filtered);
    }
  };

  const handleAddSearch = () => {
    if (searchText.trim() !== '' && !recentSearches.includes(searchText)) {
      const updatedSearches = [searchText, ...recentSearches];
      setRecentSearches(updatedSearches);
      setFilteredSearches(updatedSearches);
    }
    setSearchText('');
    setIsInputActive(false);
  };

  const handleRemoveSearch = item => {
    const updatedSearches = recentSearches.filter(search => search !== item);
    setRecentSearches(updatedSearches);
    setFilteredSearches(updatedSearches);
  };

  const renderSearchItem = ({item}) => (
    <View style={styles.searchItem}>
      <Text style={styles.searchText}>{item}</Text>
      <TouchableOpacity
        style={styles.removeIcon}
        onPress={() => handleRemoveSearch(item)}>
        <Text style={styles.removeText}>×</Text>
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
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Icon
            name="search"
            size={20}
            color="#aaa"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={handleSearch}
            onFocus={() => setIsInputActive(true)} // Input active
            onBlur={() => setIsInputActive(false)} // Input inactive
            onSubmitEditing={handleAddSearch}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleAddSearch}>
            <Image source={images.candle} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Horizontat Line */}
      <View style={styles.horizontalLine} />
      {isInputActive && (
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
      )}
      {!isInputActive && (
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
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
    width: '85%',
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: fontsFamily.thin,
    color: '#000',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: fontsFamily.thin,
  },
  recentSearchTitle: {
    fontSize: 18,
    fontFamily: fontsFamily.regular,
    color: '#000',
    marginBottom: 8,
    marginTop: 10,
  },
  recentSearch: {
    fontSize: 18,
    fontFamily: fontsFamily.semiBold,
    color: '#000',
    marginBottom: 8,
    marginTop: 10,
  },
  recentSearchList: {
    paddingTop: 8,
  },
  searchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchTextTitle: {
    fontSize: 18,
    fontFamily: fontsFamily.bold,
    color: colors.primary,
  },
  removeText: {
    fontSize: 20,
    color: '#999',
  },
  horizontalLine: {
    height: 1, // Thickness of the line
    backgroundColor: '#E3E3E3', // Line color
    marginVertical: 4, // Space above and below the line
  },
  searchText: {
    fontFamily: fontsFamily.regular,
  },
  searchesFound: {
    color: colors.primary,
    fontFamily: fontsFamily.medium,
  },
  searchResultView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  map: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: fontsFamily.medium,
  },
  list: {
    backgroundColor: 'white',
    paddingBottom: 16,
  },
  removeIcon: {
    width: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchScreen;
