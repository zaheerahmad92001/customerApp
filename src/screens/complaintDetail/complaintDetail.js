import React, { useReducer } from 'react';
import Header from '../../components/appHeader';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import style from './complaintDetail.style';
import ComplaintsCard from '../../components/complaintsCard/conplaintsCard';
import Filter from '../../assets/svgs/filter-search.svg';
import { LargeText, MediumText } from '../../components/Typography';
import FilterScreen from '../../components/filterScreen/filterScreen';
import ModalComponent from '../../components/modal/index';
const ComplaintDetail = ({ navigation, route }) => {

  const { scene } = route.params;


// const [state, updateState] = useReducer(
//     (state, newState) => ({...state, ...newState}),
//     {
//       isVisible: false,
//       profileImage: null,
//       fname: null,
//       lname: null,
//       email: null,
//       phone: null,
//       dob: null,
//     },
//   );
//   const {isVisible, profileImage, fname, lname, email, phone, dob} = state;




const [state , updateState] = useReducer (
  (state, newState) => ({...state, ...newState}),
  {
    isVisible: false,
  }
); 
const {isVisible} = state;

const openModal = () => {
  updateState({isVisible: isVisible ? false : true});
};



  const renderItem = Item => <ComplaintsCard />;
  const renderFilter = ()=>{
    return(
       <FilterScreen></FilterScreen>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <Header
        title={scene}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />

      <View style={style.wrapper}>
        <View style={style.mainContainer}>
          <View style={style.filterView}>
            <LargeText text={`${scene} Requests`} />
            <Pressable onPress={openModal} style={style.filterIconView}>
              <Filter />
              <MediumText text={'Filter'} style={style.textStyle} />
            </Pressable>
          </View>
          <FlatList
            data={[...Array(10).keys()]}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={style.contentContainerStyle}
          />
        </View>
      </View>

      <ModalComponent
        visible={isVisible}
        onClose={() => {
          updateState({isVisible: false});
        }}>
        <FilterScreen
          onCancel={() => {
            updateState({isVisible: false});
          }}
          onApply={() => {
            console.log('Apply')
          }}
          
        />
      </ModalComponent>
    </SafeAreaView>
  );
};
export default ComplaintDetail;
