import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useRef, useReducer} from 'react';
import TextField from '../../../components/textField/textField';
import images from '../../../assets/images';
import Header from '../../../components/appHeader';
import styles from './editProfle.styles';
import FastImage from 'react-native-fast-image';
import Camera from '../../../assets/svgs/camera.svg';
import {BottomSheet} from '../../../components/bottomSheet';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import ModalComponent from '../../../components/modal';
import MediaPicker from '../../../components/modal/mediaPicker'
import { captureImageWithCamera, pickImageFromLibrary } from '../../../functions';

const EditProfile = () => {
  const refRBSheet = useRef();

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      isVisible: false,
      profileImage:null,
    },
  );
  const {isVisible , profileImage} = state;

  // const openBottomSheet = () => {
  //   if (refRBSheet.current) {
  //     refRBSheet.current.present();
  //   } else {
  //     Alert.alert('Error', 'Something went wrong');
  //   }
  // };

  const handleImagePicked = (image) => {
    updateState({isVisible:false, profileImage:image.uri});
  };

  const openModal = () => {
    updateState({isVisible: isVisible ? false : true});
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header title={'Edit Profile'} showBackButton={true} />
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <View style={styles.innerProfileImageContainer}>
            <View style={styles.ImageContainer}>
              <FastImage
                source={profileImage?{uri:profileImage}:images.room}
                // resizeMode={FastImage.resizeMode.contain}
                style={styles.profileImage}
              />
            </View>
            <TouchableOpacity onPress={openModal} style={styles.editIcon}>
              <Camera />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.inputContainer, {flexDirection: 'row', gap: 10}]}>
          <View style={styles.inputHalf}>
            <TextField label={'First name'} value="Kaylynn" />
          </View>
          <View style={styles.inputHalf}>
            <TextField label={'Last name'} value="Kenter" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextField label={'Email'} value="Kaylynn021@gmail.com" />
        </View>
        <View style={styles.inputContainer}>
          <TextField label={'Phone number'} value="+966 123 456 7890" />
        </View>
        <View style={styles.inputContainer}>
          <TextField label={'Date of birth'} value="28 October 2024" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>

      {/* <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() => {}}
        scrollEnabled={true}
        disableDynamicSizing={false}
        height={heightPercentageToDP(20)}
      >
        <></>
      </BottomSheet> */}


      <ModalComponent
        visible={isVisible}
        onClose={() => {
          updateState({isVisible: false});
        }}>
          <MediaPicker 
          onCancel={()=>{
            updateState({isVisible: false});
          }}
          captureWithCamera={() => {
            captureImageWithCamera(handleImagePicked)}}
          pickFromGallery={() => {
            pickImageFromLibrary(handleImagePicked)}}
          
          />
        </ModalComponent>
    </SafeAreaView>
  );
};

export default EditProfile;
