import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';

const MenuItem = ({title, img, showImage, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuItem}>
      <View style={styles.menuItemsTitleCard}>
        {showImage && <Image source={img} style={styles.imageStyle} />}
        <Text style={[styles.menuText, {marginLeft: showImage ? 5 : 0}]}>
          {title}
        </Text>
      </View>
      <Icon name="chevron-right" size={20} color={colors.lightBlack} />
    </TouchableOpacity>
  );
};

const styles = {
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemsTitleCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
};

export default MenuItem;
