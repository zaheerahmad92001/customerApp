import React, { useState, useRef } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import colors from "../../assets/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import { RangeSlider } from '@react-native-assets/slider';
import WhiteStar from '../../assets/svgs/whitestar.svg'
import YellowStar from '../../assets/svgs/star.svg'

const SalonFilterCard = (props) => {
    const { onCancel, onApply } = props;

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const sliderRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("Salon");
    const [selectedRating, setSelectedRating] = useState(5);
    const [selectedDistance, setSelectedDistance] = useState("1-5 km");


    const categories = ["Salon", "Spa", "Nail Art", "Salon & Spa"];
    const ratings = [5, 4, 3, 2, "All"];
    const distances = ["1 km", "1-5 km", "5-10 km", "10-20 km"];
    const [range, setRange] = useState([0, 500]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Filters</Text>
            <View style={styles.divider}></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Category Section */}
                <Text style={styles.sectionTitle}>Category</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category}
                            style={[styles.button, selectedCategory === category && styles.selectedButton]}
                            onPress={() => setSelectedCategory(category)}
                        >
                            <Text style={[styles.buttonText, selectedCategory === category && styles.selectedText]}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Ratings Section */}
                <Text style={styles.sectionTitle}>Ratings</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {ratings.map((rating) => (
                        <TouchableOpacity
                            key={rating}
                            style={[styles.button, selectedRating === rating && styles.selectedButton]}
                            onPress={() => setSelectedRating(rating)}
                        >

                            <View style={styles.startButtonView}>
                                {selectedRating === rating ? <WhiteStar /> : <YellowStar />}
                                <Text style={[styles.buttonText, selectedRating === rating && styles.selectedText]}>
                                    {rating === "All" ? "All" : rating}
                                </Text>
                            </View>


                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Distance Section */}
                <Text style={styles.sectionTitle}>Distance</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {distances.map((distance) => (
                        <TouchableOpacity
                            key={distance}
                            style={[styles.button, selectedDistance === distance && styles.selectedButton]}
                            onPress={() => setSelectedDistance(distance)}
                        >
                            <Text style={[styles.buttonText, selectedDistance === distance && styles.selectedText]}>
                                {distance}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Price Range Section */}
                <Text style={styles.sectionTitle}>Price Range</Text>
                <View>
                    <RangeSlider
                        style={styles.slider}
                        range={range}
                        minimumValue={0}
                        maximumValue={500}
                        step={1}
                        outboundColor={colors.borderPrimary}
                        inboundColor={colors.primary}
                        thumbTintColor={colors.borderPrimary}
                        onValueChange={(newRange) => setRange(newRange)}

                        trackStyle={styles.track} // Custom Track
                        thumbStyle={styles.thumb} // Custom Knob
                    //minimumTrackStyle={styles.minimumTrack} // Custom Selected Track
                    //maximumTrackStyle={styles.maximumTrack} // Custom Unselected Track
                    />
                </View>


                <View style={styles.priceInputs}>
                    <TextInput style={styles.input} value={`Sar ${range[0]}`} editable={false} />
                    <Text style={styles.dash}>-</Text>
                    <TextInput style={styles.input} value={`Sar ${range[1]}`} editable={false} />
                </View>

                <View style={styles.divider}></View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onCancel} style={[styles.actionButton, styles.cancelButton]}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onApply} style={[styles.actionButton, styles.applyButton]}>
                        <Text style={styles.applyText}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //   flex: 1,
        backgroundColor: colors.appBG,
        padding: 10,
    },
    divider: {
        height: hp(0.2),
        width: wp('75%'),
        backgroundColor: colors.darkGray,
        marginTop: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,
        fontFamily: fontsFamily.bold
    },
    sectionTitle: {
        fontSize: 14,
        fontFamily: fontsFamily.bold,
        marginTop: 15,
        marginBottom: 10,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 10,
    },
    button: {
        backgroundColor: colors.darkGray,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginRight: 10,
        marginBottom: 10
    },
    selectedButton: {
        backgroundColor: colors.primary,

    },
    buttonText: {
        color: colors.appBlack,
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        fontWeight: '500',
        alignItems: "center",
        justifyContent: 'center'
    },
    selectedText: {
        color: colors.white,
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        fontWeight: '500',
        alignItems: "center",
        justifyContent: 'center'

    },
    startButtonView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        gap: 10


    },
    priceInputs: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,


    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.darkGray,
        borderRadius: 10,
        padding: 10,
        textAlign: "center",
        fontFamily: fontsFamily.regular,
        fontWeight: '500',
        fontSize: 16,
        color: colors.appBlack,
    },
    dash: {
        fontSize: 18,
        marginHorizontal: 10,
        color: colors.darkGray,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    actionButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    cancelButton: {
        backgroundColor: colors.lightPrimary,
        marginRight: 10,

    },
    applyButton: {
        backgroundColor: colors.primary,
    },
    cancelText: {
        color: colors.primary,
        fontSize: 16,
    },
    applyText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
    },



    slider: {
        width: "100%",
        height: 40,
        marginLeft: 0,
        marginRight: 0
    },
    track: {
        height: 8,
        borderRadius: 5,
        marginLeft: 12,
        marginRight: 12
        //backgroundColor: colors.primary, // Track color
    },
    minimumTrack: {
        backgroundColor: colors.borderPrimary, 
    },
    maximumTrack: {
        backgroundColor: colors.borderPrimary, 
    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.primary, // Knob color
        borderWidth: 1,
        borderColor: colors.primary,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 0,
        elevation: 0,
    },
    valueContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,

    },

    whiteStar: {
        color: colors.white,
    },

});

export default SalonFilterCard;