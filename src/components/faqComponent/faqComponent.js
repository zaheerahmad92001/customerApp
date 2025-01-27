// FAQItem.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const FAQItem = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => setIsOpen(!isOpen)}
          style={styles.questionContainer}>
          <Text style={styles.question}>{question}</Text>
          {isOpen ? (
            <Entypo name="chevron-up" size={20} />
          ) : (
            <Entypo name="chevron-down" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {isOpen && <Text style={styles.answer}>{answer}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.semiBold,
  },
  answer: {
    marginBottom: 8,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
});

export default FAQItem;
