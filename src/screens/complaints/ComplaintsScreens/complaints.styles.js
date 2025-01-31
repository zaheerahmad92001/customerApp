import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP } from "react-native-responsive-screen";
import {
    heightPercentageToDP,
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import fontsFamily from "../../../assets/fontsFamily";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    wraper: {
        flex: 1,
        padding: 5,
        backgroundColor: colors.lightGray
    },
    box: {
        width: wp(27),
        height: hp(13.1),
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray,
        alignItems: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: hp(3)
    },
    statusText: {
        fontSize: RFValue(14),
        fontFamily: fontsFamily.regular,
        color: colors.appBlack,
        textAlign: 'center',
        marginTop: 12
    },
    innerRoundedBox: {
        width: 50,
        height: 50,
        backgroundColor: colors.lightPrimary,
        borderRadius: 25,
        marginTop: hp(1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerTextValue: {
        fontSize: RFValue(15),
        fontFamily: fontsFamily.regular,
        color: colors.primary,
        textAlign: 'center',
    },
    bottomContainer: {
        flex:1,
        backgroundColor: colors.white,
        height: hp('8%'),
        width: wp('100%'),
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        elevation: 8,
        shadowColor: colors.gray,
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.2,
        shadowRadius: 8
    },
    buttonContainer: {
        backgroundColor: colors.primary,
        marginLeft: 20,
        marginRight: 20,
        height: hp('5%'),
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonTextStyle: {
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        color: colors.white
    }
});
export default styles;