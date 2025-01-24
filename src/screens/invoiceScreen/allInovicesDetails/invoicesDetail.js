import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import Header from '../../../components/appHeader';
import InvoiceCard from '../../../components/invoiceCard/invoiceCard';
import {invoices} from '../../../staticData';

const InvoicesDetail = () => {
  return (
    <View style={styles.container}>
      <Header title={'Invoice'} showBackButton />
      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>All Invoices</Text>
          <Text style={styles.summaryValue}>06</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Paid</Text>
          <Text style={styles.summaryValue}>04</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Cancelled</Text>
          <Text style={styles.summaryValue}>02</Text>
        </View>
      </View>
      <Text style={styles.heading}>Invoices</Text>
      <FlatList
        data={invoices}
        keyExtractor={item => item.id}
        renderItem={({item}) => <InvoiceCard invoice={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryCard: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flex: 1,
    marginHorizontal: 4,
  },
  summaryTitle: {
    fontSize: RFValue(14),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },
  summaryValue: {
    fontSize: RFValue(20),
    fontFamily: fontsFamily.semiBold,
    textAlign: 'left',
  },
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    marginVertical: 15,
  },
  
});

export default InvoicesDetail;
