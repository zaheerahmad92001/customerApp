import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper'
import { Rating } from 'react-native-ratings';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import images from '../../../assets/images';
import Header from '../../../components/appHeader';
import TextField from '../../../components/textField/textField';

const Review = () => {
    const [rating, setRating] = useState(3);
    const [review, setReview] = useState('');
    const [recommend, setRecommend] = useState(null);

    const ratingCompleted = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = () => {
        console.log({ rating, review, recommend });
        // Submit logic goes here
    };

    return (
        <View style={styles.container}>
            <Header title={'Review'} showBackButton />
            <Text style={styles.headerTitle}>Write a Review</Text>
            <ScrollView>
                <Image
                    source={images.room} // Replace with your salon image
                    style={styles.image}
                />
                <Text style={styles.title}>How was your Experience with Hair Avenue salon?</Text>

                <Rating
                    type="custom"
                    ratingColor={colors.primary}
                    ratingBackgroundColor={colors.lightGray}
                    ratingCount={5}
                    imageSize={50}
                    onFinishRating={ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />

                <TextField label={'Write your Review'} placeholder={'Your review here'} multiline inputStyle={styles.inputStyle} />

                <Text style={styles.question}>Would you recommend Hair Avenue salon to your friends?</Text>
                <View style={styles.options}>
                    <View style={styles.radioButtonContainer}>
                        <RadioButton
                            value="yes"
                            status={recommend === true ? 'checked' : 'unchecked'}
                            onPress={() => setRecommend(true)}
                        />
                        <Text style={styles.label}>Yes</Text>
                    </View>
                    <View style={styles.radioButtonContainer}>
                        <RadioButton
                            value="no"
                            status={recommend === false ? 'checked' : 'unchecked'}
                            onPress={() => setRecommend(false)}
                        />
                        <Text style={styles.label}>No</Text>
                    </View>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.white,
        flex: 1,
    },
    headerTitle: {
        fontSize: RFValue(16),
        fontFamily: fontsFamily.semiBold,
        marginBottom: hp(5)
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: RFValue(14),
        fontFamily: fontsFamily.semiBold,
        textAlign: 'center',
    },
    question: {
        fontSize: RFValue(14),
        marginBottom: 10,
        fontFamily: fontsFamily.regular,
    },
    options: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    label: {
        marginLeft: 2,
        fontSize: RFValue(12), // Updated to RFValue
    },
    buttons: {
        marginTop: 'auto', // Push buttons to the bottom
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    submitButton: {
        backgroundColor: '#d28ba7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    submitText: {
        color: colors.white,
        fontSize: RFValue(12), // Updated to RFValue
        textAlign: 'center',
        fontFamily: fontsFamily.semiBold,
    },
    cancelButton: {
        backgroundColor: colors.lightGray,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    cancelText: {
        fontSize: RFValue(12), // Updated to RFValue
        textAlign: 'center',
        fontFamily: fontsFamily.semiBold,
    },
    inputStyle: {
        padding: 10,
        minHeight: 100,
        textAlignVertical: 'top',
        marginBottom: hp(8),
        fontSize: RFValue(14), // Added font size for input text
    },
});


export default Review;
