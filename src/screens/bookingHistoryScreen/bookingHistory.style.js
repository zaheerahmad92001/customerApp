import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: colors.appBG,
    },
    wrapper: {
      flex: 1,
      marginHorizontal: wp(4),
    },
    contentContainerStyle: {
      paddingTop: hp(2),
    },
  });
  export default styles;