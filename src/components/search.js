import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import FilterIcon from '../assets/svgs/candle.svg';
import Icon from 'react-native-vector-icons/EvilIcons';
import colors from '../assets/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import fontsFamily from "../assets/fontsFamily";
import { recentSearches } from "../staticData";




const Search=(props)=>{
    const {setFilteredSearches ,setIsInputActive} = props

     const [searchText, setSearchText] = useState('');


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

    return(
        <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Icon
            name="search"
            size={24}
            color="#99A0A6"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#99A0A6"
            value={searchText}
            onChangeText={handleSearch}
            onFocus={() => setIsInputActive(true)} // Input active
            onBlur={() => setIsInputActive(false)} // Input inactive
          />
        </View>
        <View>
          <Pressable onPress={()=>{}}
          style={styles.button}>
          <FilterIcon/>
          </Pressable>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        borderRadius: 8,
        paddingHorizontal: 8,
        height: 40,
        width: wp(82),
        borderWidth: 1,
        borderColor:colors.gray,
      },
      searchIcon: {
        marginRight:5,
      },
      button: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginLeft: 5,
        borderWidth: 1,
        borderColor:colors.gray,
      },
      buttonText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: fontsFamily.thin,
      },
      
})

export default Search;



