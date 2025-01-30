import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { SmallText } from '../Typography';
import RightArrow from '../../assets/svgs/arrow-right.svg';


const MenuItem = ({title, Icon, showImage, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuItem}>
      <View style={styles.menuItemsTitleCard}>
        {showImage && <Icon/>}
        <SmallText text={title} style={styles.menuText} />
      </View>
      <RightArrow/>
    </TouchableOpacity>
  );
};

const styles = {
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal:10,
    marginBottom: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
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
    fontSize: RFValue(13),
    fontFamily:fontsFamily.extraLight,
    fontWeight: '400',
    color: colors.lightBlack,
    marginLeft:12,
  },
};

export default MenuItem;
