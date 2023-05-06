import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {verticalScale, horizontalScale, moderateScale} from '../../utils/Dim';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import BgImage from '../components/BgImage';
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Login');
      navigation.dispatch(StackActions.replace('Login'));
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <BgImage op={0.4} />

      <View
        style={{
          width: horizontalScale(336),
          height: verticalScale(336),
          position: 'absolute',
          left: horizontalScale(-177),
          borderRadius: moderateScale(500),
          top: verticalScale(-121),
          backgroundColor: '#146C38',
        }}
      />
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={require('../../assets/mubarak.png')}
          style={{
            width: horizontalScale(250),
            height: verticalScale(250),
          }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 50, color: 'black'}}>
          Welcome
        </Text>
        <Text style={{fontSize: 25}}>Some Information Here</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textHere: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
