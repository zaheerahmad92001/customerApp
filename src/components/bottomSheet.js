import React, { useCallback } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

// import { styles } from './styles';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import colors from '../assets/colors';

export const BottomSheet = (props) => {
  const {
    children,
    refRBSheet,
    onClose,
    height,
    isModal,
    scrollEnabled,
    disableDynamicSizing,
    title,
    removeSheetScrolllView=false,
  } = props;

  const renderBackdrop = useCallback(
    (props) => (
      <>
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        >
          {isModal && (
            <TouchableWithoutFeedback onPress={onDismiss}>
              <View style={{ flex: 1, backgroundColor: 'transparent' }} />
            </TouchableWithoutFeedback>
          )}
        </BottomSheetBackdrop>
      </>
    ),
    []
  );

  const onDismiss = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <BottomSheetModal
      ref={refRBSheet}
      snapPoints={[height]}
      enableDynamicSizing={disableDynamicSizing ? false : true}
      keyboardBlurBehavior="restore"
      enableDismissOnClose
      backdropComponent={renderBackdrop}
      backgroundStyle={{backgroundColor:colors.appBG}}
      onDismiss={onDismiss}
    >
      {Boolean(title) && (
        <View>
          <Text>{title}</Text>
        </View>
      )}
     { removeSheetScrolllView ?
      <View style={{ minHeight: height }}>{children}</View>
      :
      <BottomSheetScrollView
      style={{paddingHorizontal:20}}
        nestedScrollEnabled={false}
        scrollEnabled={scrollEnabled ? true : false}>
        <View style={{ minHeight: height }}>{children}</View>
      </BottomSheetScrollView>
      }
    </BottomSheetModal>
  );
};
