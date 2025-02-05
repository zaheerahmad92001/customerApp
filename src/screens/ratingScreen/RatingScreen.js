import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import style from "../ratingScreen/RatingScreen.Style";
import { ProgressBar } from 'react-native-paper';
import RatingHeaderCard from "../../components/RatingHeaderCard/RatingHeaderCard";
import Header from "../../components/appHeader";
import RatingReviewCard from "../../components/ratingCard/RatingCard";
import Star from "../../assets/svgs/star.svg";
const RatingScreen = () => {

    const ratingsData = [
        { stars: 5, count: 180 },
        { stars: 4, count: 80 },
        { stars: 3, count: 30 },
        { stars: 2, count: 15 },
        { stars: 1, count: 7 },
    ];

    const totalRatings = ratingsData.reduce((acc, item) => acc + item.count, 0);


    const ratingReviewCard = () => {
        return (
            <View style={style.card}>

                <View style={style.starContainer}>
                    {[...Array(5)].map((_, i) => (
                        <View style={style.starView}>
                            <Star />
                        </View>
                    ))}
                </View>
                <Text style={style.ratintTxt}>I've been going to this salon for months, and they never disappoint. Always professional and friendly!</Text>
                <View style={style.namedateView}>
                    <Text style = {style.nameText}>Wade Warren</Text>
                    <Text style = {style.dotText}> • </Text>
                    <Text style = {style.dotText}>6 days ago</Text>
                </View>
                <View style = {style.divider}></View>
            </View>
        );
    }


    return (
        <SafeAreaView style={style.container}>
            <Header title={'Review'} showBackButton></Header>
            <RatingHeaderCard item={ratingsData} totalRating={totalRatings} />
            <View style={style.divider}></View>
            <View style={style.totalReviews}>
                <Text style = {style.reviewText}> {totalRatings} Reviews</Text>
                <View><Text>Most Relevant</Text></View>
            </View>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={ratingReviewCard}
            ></FlatList>


        </SafeAreaView>
    );
};

export default RatingScreen;