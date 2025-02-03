import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import fontsFamily from "../../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
import {
    heightPercentageToDP,
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    mainContainer: {
        flex: 1,
        padding: 5,
        backgroundColor: colors.appBG
    },

    headingtext: {
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(16),
        marginTop: 10,
        marginLeft: 12,
        marginBottom:10
    },
    bookingreferenceView: {
        height: hp(10),
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10
    },
    selecteType: {
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
    },
    commentsView: {
        backgroundColor: colors.inputGray,
        //paddingHorizontal:16,
        margin: 5,
        fontFamily: fontsFamily.regular,
        height: hp(15),
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10
    },
    textInput: {
        padding: 10,
        marginBottom: 10,
        paddingLeft: 10
    },

    bottomContainer: {
        //flex:1,
        backgroundColor: colors.white,
        //height: hp('8%'),
        //width: wp('100%'),
        //position: 'absolute',
        //bottom: 0,
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
        fontFamily: fontsFamily.medium,
        fontSize: RFValue(13),
        color: colors.white
    }
});
export default styles;