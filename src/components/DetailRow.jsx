import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import fontsFamily from '../assets/fontsFamily';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../assets/colors';
import { SmallText } from './Typography';

const DetailRow = ({ label, value, Icon }) => (
    <View style={styles.detailRow}>
        <View style={styles.invoiceRow}>
            <Icon/>
            <Text style={styles.detailLabel}>{label}</Text>
        </View>
        <SmallText style={styles.detailValue} text={value}/>
    </View>
);

const styles = StyleSheet.create({
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:hp(1.7),
    },
    detailLabel: {
        fontSize: RFValue(14),
        color:colors.lightBlack,
        fontFamily: fontsFamily.regular,
        fontWeight:'400',
        marginLeft: 5,
    },
    detailValue: {
        color:colors.appBlack,
        fontFamily: fontsFamily.regular,
        width: wp(40),
        textAlign: 'right',
    },
    invoiceRow: {
        flexDirection: 'row',
    },
});

export default DetailRow;