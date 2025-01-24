import { StyleSheet } from "react-native";
import fontsFamily from "../../../assets/fontsFamily";
import colors from "../../../assets/colors";
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    input: {
      flex: 1,
      fontSize: RFValue(12),
      fontFamily: fontsFamily.regular,
      color: colors.appBlack,
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
      fontSize:wp(4),
      fontFamily: fontsFamily.regular,
      color: colors.appBlack,
      marginBottom: 8,
      marginTop: 10,
    },
    recentSearch: {
      fontSize: 18,
      fontFamily: fontsFamily.semiBold,
      color:colors.appBlack,
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
      fontSize:14,
      fontFamily: fontsFamily.regular,
      fontWeight:'500',
      color:colors.lightBlack,

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

  export default styles;