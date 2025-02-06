import React from 'react';
import Header from '../../components/appHeader';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import style from './complaintDetail.style';
import ComplaintsCard from '../../components/complaintsCard/conplaintsCard';
import Filter from '../../assets/svgs/filter-search.svg';
import { LargeText, MediumText } from '../../components/Typography';

const ComplaintDetail = ({navigation, route}) => {

const {scene} = route.params;

  const renderItem = Item => <ComplaintsCard />;

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
            <View style={style.filterIconView}>
            <Filter/>
            <MediumText text={'Filter'} style={style.textStyle} />
            </View>
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
    </SafeAreaView>
  );
};
export default ComplaintDetail;
