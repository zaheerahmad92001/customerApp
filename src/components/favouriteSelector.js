import React, { useState } from 'react';
import { Pressable, StyleSheet} from 'react-native';
import Heart from '../assets/svgs/heart.svg';
import HeartFilled from '../assets/svgs/fill-heart.svg';
import colors from '../assets/colors';

const FavourSelector = (props) => {
    const {onFavorite} = props;
      const [isSelected , setIsSelected] = useState(false)

      const handleOnPress = () => {
        setIsSelected(!isSelected);
        onFavorite();
      };
  return (
    <Pressable style={styles.favoriteButton} onPress={handleOnPress}>
      {isSelected ? <HeartFilled /> : <Heart />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
    favoriteButton: {
        padding: 4,
        backgroundColor: colors.inputGray,
        borderRadius:5,
        marginLeft: 8,
      },
});

export default FavourSelector;
