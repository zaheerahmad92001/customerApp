import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {languages} from '../../../staticData';
import LanguageSelector from '../../../components/languageSelector/languageSelector';
import {RFValue} from 'react-native-responsive-fontsize';
import Header from '../../../components/appHeader';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelect = language => {
    setSelectedLanguage(language);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Languages'} showBackButton />
      <Text style={styles.headerTitle}>
        Please select your default language
      </Text>
      <FlatList
        data={languages}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <LanguageSelector
            label={item}
            selected={item === selectedLanguage}
            onSelect={handleSelect}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor:colors.white
  },
  headerTitle: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    marginBottom: 10,
  },
});

export default Language;
