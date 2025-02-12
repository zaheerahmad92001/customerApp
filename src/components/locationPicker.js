import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import FilterIcon from '../assets/svgs/candle.svg';
import colors from '../assets/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Marker from '../assets/svgs/location-color.svg';

const LocationPicker = props => {
  const {location, handleOnPress} = props;
  return (
    <Pressable onPress={handleOnPress} style={styles.searchBarContainer}>
      <View style={[styles.searchBar]}>
        <Marker />
        <Text style={styles.input}>{location}</Text>
      </View>
      <Pressable onPress={() => {}} style={styles.button}>
        <FilterIcon />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
    width: wp(80),
    borderWidth: 1,
    borderColor: colors.gray,
  },
 
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 7,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: colors.gray,
  },
});

export default LocationPicker;
