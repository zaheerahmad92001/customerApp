import React, {useEffect, useRef, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/appHeader';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './location.style';
import LocationPicker from '../../components/locationPicker';
import GooglePlacesModal from '../../components/modal/google-places-modal';
import TopRatedVenus from '../../components/topRatedVenus';

const Location = ({navigation, route}) => {
  const {params} = route.params;
  const [location, setLocation] = useState('');
  const locationModalRef = useRef();

  useEffect(() => {
    setLocation(params);
  }, [params]);

  const openLocationModal = () => {
    if (locationModalRef?.current) {
      locationModalRef.current.open();
    }
  };

  const renderItem = ({item, index}) => {
    return <TopRatedVenus />;
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Location'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.picker}>
        <LocationPicker location={location} handleOnPress={openLocationModal} />
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <View style={styles.flatlistView}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            horizontal={true}
            renderItem={renderItem}
            contentContainerStyle={styles.flatListContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <GooglePlacesModal ref={locationModalRef} setLocation={setLocation} />
    </SafeAreaView>
  );
};
export default Location;
