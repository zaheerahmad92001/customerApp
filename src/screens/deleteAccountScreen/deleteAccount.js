import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import Header from '../../components/appHeader';
import ReasonSelector from '../../components/reasonSelector/reasonSelector';
import {reasons} from '../../staticData';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DeleteAccount = ({navigation,route}) => {
  const [selectedReason, setSelectedReason] = useState(null);

  const handleSelect = reason => {
    setSelectedReason(reason);
  };

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
    console.log('Account deletion confirmed for reason:', selectedReason);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Delete Account'} showBackButton  onBackPress={()=>navigation.goBack()}/>
      
      <View style = {styles.mainContainer}>
      <Text style={styles.heading}>Delete Account</Text>
      <Text style={styles.description}>
        Are you sure you want to delete your account? This action is permanent
        and will erase all your personal information, booking history, and saved
        preferences
      </Text>
      <FlatList
        data={reasons}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <ReasonSelector
            label={item}
            selected={item === selectedReason}
            onSelect={handleSelect}
          />
        )}
      />
      <Pressable
        style={styles.deleteButton}
        onPress={handleDeleteAccount}
        disabled={!selectedReason} // Disable the button if no reason is selected
      >
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </Pressable>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer:{
    paddingLeft:20,
    paddingRight:20,
    flex:1,
    backgroundColor:colors.appBG


  },
  heading: {
    fontSize: RFValue(15),
    fontFamily: fontsFamily.semiBold,
    fontWeight:'600',
    paddingTop:50,
    marginLeft:8
  },
  description: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.medium,
    fontWeight:'500',
    color: colors.lightBlack,
    marginTop: hp(2),
    marginBottom: hp(5),
    marginLeft:8
  },
  deleteButton: {
    marginTop: 'auto',
    backgroundColor: colors.primary,
    paddingVertical: hp(1.5),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:hp(1)
  },
  deleteButtonText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.bold,
  },
});

export default DeleteAccount;
