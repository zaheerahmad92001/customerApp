import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import images from '../../../assets/images';
import {accountManagement, menuOptions, supportOptions} from '../../../staticData';
import BackArrow from '../../../assets/svgs/backArrow.svg';
import Header from '../../../components/appHeader';
import MenuItem from '../../../components/menItems/menuItems';
import styles from './profile.styles';
import {
  LargeText,
  MediumText,
  SmallText,
  XlargeText,
} from '../../../components/Typography';
import colors from '../../../assets/colors';

const Profile = ({navigation , route}) => {
console.log('navigation', navigation)
  const handleNavigation =(routeName)=>{
    navigation.navigate(routeName)
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Profile'} showBackButton={true} onBackPress={()=>navigation.goBack()}/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={images.room}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.titleContainer}>
            <XlargeText text={'Kaylynn Kenter'} style={styles.title} />
            <SmallText text={'kaylynn021@gmail.com'} style={styles.subTitle} />
          </View>
        </View>

        <View style={styles.inviteContainer}>
          <BackArrow />
          <XlargeText text={'Invite Friends'} style={styles.inv} />
        </View>

        <MediumText text={'Personal Information'} style={styles.infoText} />

        <View style={styles.menuContainer}>
          {menuOptions.map((option, index) => {
            return (
              <MenuItem
                key={index}
                title={option.title}
                Icon={option.img}
                showIcon={true}
                // style={{backgroundColor:colors.inputGray}}
                onPress={()=>handleNavigation(option.routeName)}
              />
            );
          })}
        </View>

        <MediumText text={'Support'} style={styles.supportStyle} />
        {supportOptions.map((option, index) => (
          <MenuItem
            key={index}
            title={option.title}
            Icon={option.img}
            showIcon={true}
            onPress={() => console.log(`${option.title} pressed`)}
          />
        ))}

<MediumText text={'Account Managment'} style={styles.supportStyle} />
        {accountManagement.map((option, index) => (
          <MenuItem
            key={index}
            title={option.title}
            Icon={option.img}
            showIcon={true}
            onPress={()=>handleNavigation(option.routeName)}
          />
        ))}

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
