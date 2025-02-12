import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../assets/colors";
import Star from "../../assets/svgs/star.svg";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";
import { ProgressBar } from 'react-native-paper';
import { widthPercentageToDP } from "react-native-responsive-screen";
const RatingHeaderCard = (props) => {
    const { item, totalRating } = props;

    console.log('ratingsData:', item);
    return (
        <View style={style.mainContainer}>
            <View style={style.overallRating}>
                <Text style={style.ratingText}>4.5</Text>
                <View style={style.totalRatingView}>
                    <View style={style.starsRow}>
                        {[...Array(5)].map((_, i) => (
                            <Star />
                        ))}
                    </View>
                    <Text style={style.totalRatings}> {totalRating} Ratings</Text>
                </View>
            </View>

            {[...Array(5)].map((item, index) => {
                return (
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>

                        <View style={style.starContainer}>
                            {[...Array(5)].map((_, i) => (
                                <View style={style.starView}>
                                    <Star />
                                </View>
                            ))}
                        </View>
                        <View style={{ maxWidth: widthPercentageToDP(70) }}>
                            {/* <ProgressBar
                                progress={4}
                                color={colors.primary}
                                style={style.progressBar}
                                fillStyle={{backgroundColor:colors.appBlack}}
                                animatedValue = {3}
                                
                            /> */}

                            <ProgressBar
                                progress={0.5}
                                width={250}
                                color={colors.primary} 
                                unfilledColor={colors.appBlack} 
                                borderWidth={0}
                                style={style.progressBar}
                            />
                        </View>
                    </View>
                )
            })}
        </View>

    );
};

const style = StyleSheet.create({
    mainContainer: {
        //padding: 15,
        paddingHorizontal: 20,
        backgroundColor: colors.appBG,
    },
    overallRating: {
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
    },
    ratingText: {
        fontSize: RFValue(40),
        fontWeight: 'bold',
        color: colors.appBlack,
    },
    starsRow: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    totalRatings: {
        fontSize: 16,
        color: colors.chatlistmessage,
        fontFamily: fontsFamily.regular
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    starText: {
        width: 30,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.darkYellow,
    },
    progressBar: {
        //flex: 1,
        height: 4,
        //borderRadius: 5,
        //marginHorizontal: 10,
        marginLeft: 10,
        backgroundColor: colors.gray
    },

    countText: {
        width: 40,
        textAlign: 'right',
        fontSize: 14,
        fontWeight: '700',
        color: colors.appBlack,
    },
    totalRatingView: {
        marginLeft: 10
    },
    starContainer: {
        flexDirection: 'row'
    },
    starView: {
        padding: 4
    }
});
export default RatingHeaderCard;