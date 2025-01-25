import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import fontsFamily from '../assets/fontsFamily';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const DetailRow = ({ label, value, image }) => (
    <View style={styles.detailRow}>
        <View style={styles.invoiceRow}>
            <Image source={image} />
            <Text style={styles.detailLabel}>{label}</Text>
        </View>
        <Text style={styles.detailValue}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    detailLabel: {
        fontSize: RFValue(12),
        color: '#666',
        fontFamily: fontsFamily.regular,
        marginLeft: 5,
    },
    detailValue: {
        fontSize: RFValue(12),
        color: '#333',
        fontFamily: fontsFamily.regular,
        width: wp(40),
        textAlign: 'right',
    },
    invoiceRow: {
        flexDirection: 'row',
    },
});

export default DetailRow