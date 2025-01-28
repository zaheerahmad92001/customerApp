import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const ModalComponent = ({ visible, onClose, title, children }) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding:20,
    marginHorizontal: 20,
  },
  
  childrenContainer: {
    // marginBottom: 20,
  },
  
});

export default ModalComponent;
