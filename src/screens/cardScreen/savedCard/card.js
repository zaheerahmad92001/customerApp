import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../../../components/appHeader';
import Trash from '../../../assets/svgs/trash.svg';
import styles from './card.styles';
import { MediumText } from '../../../components/Typography';
import { AppButton } from '../../../components/appButton';
import { FlatList } from 'react-native-gesture-handler';

const Card = ({navigation , route}) => {

const handleAddNewCard=()=>{
navigation.navigate('addCard')
}



const renderItem = ({ item }) => {
  return(
 <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
              }}
              resizeMode='contain'
              style={styles.icon}
            />
          </View>

          <View style={styles.cardInfo}>
            <MediumText text='Kaylynn Kenter' style={styles.name} />
            <MediumText text='********2259'/>
          </View>

          <View style={styles.expiryCvv}>
            <MediumText text='07/26' style={styles.name} />
            <MediumText text='056'/>
          </View>

          <TouchableOpacity style={styles.deleteButton}>
            <Trash />
          </TouchableOpacity>
        </View> 
  )}
  



  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Saved Cards'} showBackButton onBackPress={()=>navigation.goBack()} />
      <View style={styles.wrapper}>
        <FlatList 
        data={[1,2,3,4,5,6,7,8,9,10]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        />
        <AppButton title='Add New Card' onPress={handleAddNewCard} style={styles.button} />
      </View>
    </SafeAreaView>
  );
};



export default Card;
