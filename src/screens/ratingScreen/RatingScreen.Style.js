import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.appBG,
        flex: 1
    },
    totalReviews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10
    },
    reviewText:{
        fontFamily:fontsFamily.bold,
        fontWeight:'500',
        fontSize:RFValue(12)

    },
    card: {
        backgroundColor: colors.appBG,
        paddingLeft: 20,
        paddingRight: 10,
        paddingBottom:10
    },
    divider:{
        height:1,
        width:'94%',
        paddingLeft:20,
        paddingRight:10,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        backgroundColor:colors.gray

    },
    ratintTxt:{
        fontFamily:fontsFamily.regular,
        fontSize:RFValue(12),
        fontWeight:'300',
        paddingVertical:15,
        paddingLeft:10,
        color:colors.chatlistmessage


    },
    namedateView: {
        flexDirection: 'row',
        marginTop:5,
        paddingLeft:10
    },
    nameText:{
        color:colors.primary,
        fontFamily:fontsFamily.bold,
        fontSize:RFValue(12),
        fontWeight:'400',
        alignItems:'center',
         textAlign:'center',
         
    },
    dotText:{
        fontWeight:'500',
        alignItems:'center',
        textAlign:'center',
        fontFamily:fontsFamily.medium,
        color:colors.chatlistmessage

    },
    starContainer: {
        flexDirection: 'row',
        marginTop:10
    },
    starView: {
        padding: 4
    }
});

export default style;