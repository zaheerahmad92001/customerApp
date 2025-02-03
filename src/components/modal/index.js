import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const ModalComponent = ({ visible, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      transparent={true} // Important for background transparency
      animationType="fade"
      onRequestClose={onClose} // Calls onClose when back button is pressed on Android
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  modalContent: {
    backgroundColor: colors.appBG,
    borderRadius: 10,
    width:'90%',
    padding: 20,
    alignSelf: 'center',
  },
});

export default ModalComponent;





// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet , Modal, Alert } from 'react-native';
// import colors from '../../assets/colors';

// const ModalComponent = ({ visible, onClose, title, children }) => {
//   return (
//     <Modal
//       visible={visible}
//       onRequestClose={() => {
//         Alert.alert('Modal has been closed.');
//         // setModalVisible(!modalVisible);
//       }}
//       // onBackdropPress={onClose}
//       animationIn="slideInUp"
//       animationOut="slideOutDown"
//       useNativeDriver
//       style={styles.modalContainer}
//     >
//       <View style={styles.modalContent}>
//         <View style={styles.childrenContainer}>{children}</View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     margin: 0,
//   },
//   modalContent: {
//     backgroundColor:colors.appBG,
//     borderRadius: 10,
//     padding:20,
//     marginHorizontal: 20,
//   },
  
//   childrenContainer: {
//     // marginBottom: 20,
//   },
  
// });

// export default ModalComponent;
