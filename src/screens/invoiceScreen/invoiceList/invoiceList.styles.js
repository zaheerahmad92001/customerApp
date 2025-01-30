import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../../assets/fontsFamily";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: colors.white,
    },
    container: {
      flex: 1,
      marginHorizontal:wp(4),
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
    },
    
    heading: {
      fontSize: RFValue(16),
      fontFamily: fontsFamily.semiBold,
      marginVertical: 15,
    },
  });
  export default styles;