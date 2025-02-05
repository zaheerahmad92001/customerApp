import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import colors from '../../../assets/colors';
import Header from '../../../components/appHeader';
import ReasonSelector from '../../../components/reasonSelector/reasonSelector';
import {reasons} from '../../../staticData';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DeleteAccount = () => {
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
      <Header title={'Delete Account'} showBackButton />
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
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDeleteAccount}
        disabled={!selectedReason} // Disable the button if no reason is selected
      >
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginTop: hp(2),
    marginBottom: hp(5),
  },
  deleteButton: {
    marginTop: 'auto',
    backgroundColor: colors.primary,
    paddingVertical: hp(1.5),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.bold,
  },
});

export default DeleteAccount;
