import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {verticalScale, horizontalScale} from '../../utils/Dim';
const BgImage = ({op}) => {
  return (
    <ImageBackground
      source={require('../../assets/Camp.png')}
      resizeMode="cover"
      style={[
        styles.image,
        {
          opacity: op,
        },
      ]}>
      {/* <Text>Inside</Text> */}
    </ImageBackground>
  );
};

export default BgImage;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    height: verticalScale(400),
    width: Dimensions.get('window').width + 100,
    bottom: verticalScale(0),
    left: horizontalScale(-100),
    // opacity: {op},
  },
});
