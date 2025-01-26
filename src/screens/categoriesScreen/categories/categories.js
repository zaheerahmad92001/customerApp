import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../../components/appHeader';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';
import MenuItem from '../../../components/menItems/menuItems';
import {categoriesOptions} from '../../../staticData';

const Categories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Categories'} showBackButton />
      <Text style={styles.heading}>All Categories</Text>

      <View style={styles.menuContainer}>
        {categoriesOptions.map((option, index) => (
          <MenuItem
            key={index}
            title={option.title}
            img={option.img}
            showImage={true}
            onPress={() => console.log(`${option.title} pressed`)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
    marginBottom: 10,
  },
  menuContainer: {
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
});

export default Categories;
