import React, { useCallback } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

// import { styles } from './styles';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

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
    //   backgroundStyle={styles.container}
      onDismiss={onDismiss}
    >
      {Boolean(title) && (
        <View 
        // style={styles.meetingListContainer}
        >
          <Text 
        //   style={styles.font}
          >{title}</Text>
        </View>
      )}

      <BottomSheetScrollView
        nestedScrollEnabled={true}
        scrollEnabled={scrollEnabled ? true : false}
      >
        <View style={{ minHeight: height }}>{children}</View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};
