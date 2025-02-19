import React, {useCallback, useReducer, useRef, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Header from '../../components/appHeader';
import SalonCard from '../../components/salonCard/salonCard';
import Search from '../../components/search';
import {mockData, recentSearches, venueList} from '../../staticData';
import styles from './venuList.style';
import {LargeText} from '../../components/Typography';
import TopRatedVenus from '../../components/topRatedVenus';
import { BottomSheet } from '../../components/bottomSheet';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import FilterCard from '../../components/modal/filterCard';

const VenueList = ({navigation, route}) => {
  const {title} = route.params;
  const isTopRated = title === venueList.topRated;
  const refRBSheet = useRef();

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {},
  );
  const {} = state;

  const handleNavigation = (screen, params = {}) => {
    navigation.navigate(screen, params);
  };

  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };


  const openBottomSheet = useCallback((item) => {
        if (refRBSheet.current) {
           refRBSheet.current.present();
        }
      }, [refRBSheet]);

    const hideBottomSheet = () => {
      if (refRBSheet.current) {
        refRBSheet.current.close();
      }
    };

  const renderVenuList = ({item}) => {

    if (title === venueList.topRated) {
      return <TopRatedVenus
      handleOnPress={() => handleNavigation('detail', {item})}
      onFavorite={() => handleFavoritePress(item.id)}

      />;
    } else {
      return (
        <SalonCard
          item={item}
          handleOnPress={() => handleNavigation('detail', {item})}
          onFavorite={() => handleFavoritePress(item.id)}
          showFavoriteButton={true}
        />
      );
    }
  };

  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={title}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <View style={styles.searchContainer}>
            <Search
              setFilteredSearches={setFilteredSearches}
              setIsInputActive={setIsInputActive}
              handleOnPress={openBottomSheet}
            />
            <LargeText text={title} style={styles.heading} />
          </View>
          <View style={styles.listStyle}>
            <FlatList
              data={mockData}
              numColumns={isTopRated ? 2 : 1}
              keyExtractor={item => item.id.toString()}
              renderItem={renderVenuList}
              contentContainerStyle={[styles.contentContainerStyle,]}
              columnWrapperStyle={isTopRated? styles.columnWrapper: null}
            />
          </View>
        </View>
      </View>
      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() =>hideBottomSheet()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={heightPercentageToDP(68)}
      >
        <FilterCard/>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default VenueList;
