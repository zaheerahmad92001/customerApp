import React, {useState} from 'react';
import {View, Image, SafeAreaView, Platform} from 'react-native';
import RadioButton from '../../components/radioButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import images from '../../assets/images';
import Header from '../../components/appHeader';
import TextField from '../../components/textField/textField';
import styles from './review.styles';
import CustomRating from '../../components/customRating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  LargeText,
  MediumText,
  XlargeText,
} from '../../components/Typography';
import {AppButton} from '../../components/appButton';
import colors from '../../assets/colors';

const Review = ({navigation , route}) => {
  const [review, setReview] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [rating, setRating] = useState(3);

  const handleSubmit = () => {
    console.log({rating, review, recommend});
    // Submit logic goes here
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Review'} showBackButton={true} onBackPress={()=>navigation.goBack()} />
      <KeyboardAwareScrollView
        style={{flex: 1}}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={scrollEnabled}
        keyboardShouldPersistTaps="handled"
        onContentSizeChange={(contentWidth, contentHeight) => {
          const screenHeight = Platform.OS === 'ios' ? 600 : 600;
          setScrollEnabled(contentHeight > screenHeight);
        }}>
        <View style={styles.wrapper}>
          <XlargeText text="Write a Review" style={{marginTop: hp(1.3)}} />

          <View style={{marginHorizontal: wp(7)}}>
            <View style={styles.imageView}>
              <Image
                source={images.room} // Replace with your salon image
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <LargeText text="How was your Experience with Hair Avenue salon?" />

            <View style={{marginTop: hp(1.5)}}>
              <CustomRating
                maxStars={5}
                rating={rating}
                onRatingChange={newRating => {
                  setRating(newRating);
                }}
              />
            </View>
          </View>

          <View style={styles.border}></View>

          <MediumText
            text="Write your Review"
            style={{marginBottom: hp(1.3)}}
          />
          <TextField
            placeholder={'Your review here'}
            multiline
            inputStyle={styles.inputStyle}
            onChangeText={setReview}
          />

          <MediumText
            style={{marginTop: hp(1.3)}}
            text="Would you recommend Hair Avenue salon to your friends?"
          />

          <View style={styles.options}>
            <View style={styles.radioButtonContainer}>
              <RadioButton options={[
                {key:'Yes',value:'Yes'},
                {key:'No',value:'No'}
              ]} />
            </View>
          </View>

          <View style={styles.buttons}>
            <AppButton onPress={handleSubmit} title={'Submit'} />
            <AppButton
              onPress={() => {}}
              title={'Cancel'}
              style={styles.cancelButton}
              textstyle={{color: colors.primary}}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Review;
