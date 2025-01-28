import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";
import colors from "../../assets/colors";
import { heightPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 15,
      borderWidth: 0.3,
      borderColor:colors.gray,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      marginBottom:heightPercentageToDP(2)
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    date: {
      fontSize: RFValue(12),
      color: colors.appBlack,
      fontFamily: fontsFamily.thin,
      fontWeight:'500',
    },
    status: {
      fontSize: RFValue(12),
      color: colors.gray,
      backgroundColor: colors.lightGray,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 5,
      fontFamily: fontsFamily.regular,
    },
    confirmed: {
      backgroundColor: colors.confirmYellowLight,
      color: colors.confirmYellow,
    },
    body: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        overflow: 'hidden',
        alignSelf: 'flex-start',
      },
    image: {
      width:null,
      height:null,
      flex:1,
    },
    details: {
      flex: 1,
      marginLeft:12,
    },
    title: {
      fontSize: RFValue(13),
      fontWeight:'600',
      color: colors.appBlack,
      fontFamily: fontsFamily.regular,
    },
    location: {
      fontSize: RFValue(12),
      color: colors.lightBlack,
      marginVertical: 2,
      fontFamily: fontsFamily.regular,
    },
    services: {
      fontSize: RFValue(12),
      color: colors.lightBlack,
      fontFamily: fontsFamily.regular,
    },
priceContainer: {
     backgroundColor: colors.lightPrimary,
     paddingVertical: 7,
     paddingHorizontal:7,
     borderRadius:5,
    },

    price: {
      fontSize: RFValue(12),
      fontWeight: '500',
      color: colors.primary,
      fontFamily: fontsFamily.regular,
    },
    icon: {
      backgroundColor: colors.lightPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      padding: 6,
      borderRadius: 5,
      marginTop: 5,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    cancelButton: {
      flex: 1,
      marginRight: 5,
      backgroundColor:'transparent',
    },
    cancelText: {
      color: colors.primary,
    },
    rescheduleButton: {
      flex: 1,
      marginLeft: 5,
    },
    rescheduleText: {
      fontSize: RFValue(12),
      color: '#fff',
      fontFamily: fontsFamily.regular,
    },
  });
export default styles;  