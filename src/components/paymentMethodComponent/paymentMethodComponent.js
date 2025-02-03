import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import colors from '../../assets/colors';
import {paymentMethods} from '../../staticData';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import {AppButton} from '../appButton';

const PaymentMethodComponent = ({onSelect}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Payment Method</Text>
        <AppButton title={'Add New Card'} />
        {/* <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add New Card</Text>
        </TouchableOpacity> */}
      </View>
      <FlatList
        data={paymentMethods}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.bold,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.appBG,
    marginBottom: 8,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text: {
    fontSize: RFValue(14),
  },
  //   addButtonText: {
  //     color: '#fff',
  //     fontSize: RFValue(14),
  //     fontWeight: 'bold',
  //   },
});

export default PaymentMethodComponent;
