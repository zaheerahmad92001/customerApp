import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Header from '../../../components/appHeader';
import InvoiceCard from '../../../components/invoiceCard/invoiceCard';
import {invoices, invoiceSummry} from '../../../staticData';
import styles from './invoiceList.styles';
import InvoiceSummry from '../../../components/invoiceSummrycard';

const InvoiceList = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
       <Header title={'Invoice'} showBackButton />
    <View style={styles.container}>
      <View style={styles.summaryRow}>
        {invoiceSummry.map((item, index)=>{
          return(
            <InvoiceSummry 
             item={item}
            />
          )
        })}
      </View>

      <Text style={styles.heading}>Invoices</Text>
      <FlatList
        data={invoices}
        keyExtractor={item => item.id}
        renderItem={({item}) => <InvoiceCard invoice={item} />}
      />
    </View>
    </SafeAreaView>
  );
};

export default InvoiceList;
