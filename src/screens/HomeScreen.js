import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../utils/Dim';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/Camp.png')}
        resizeMode="cover"
        style={styles.image}>
        {/* <Text>Inside</Text> */}
      </ImageBackground>
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Image
              resizeMode="contain"
              source={require('../../assets/mubarak.png')}
              style={{
                width: horizontalScale(70),
                height: verticalScale(70),
              }}
            />
          </View>
          <Text style={{color: 'white'}}>Welcome{'\n'}Scout Ali Salar</Text>
        </View>
        <View>
          <Ionicons name="search" size={25} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    height: verticalScale(400),
    width: Dimensions.get('window').width + 100,
    bottom: verticalScale(0),
    left: horizontalScale(-100),
    opacity: 0.1,
  },
  headerContainer: {
    backgroundColor: '#146C38',
    // height: verticalScale(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,

    flexDirection: 'row',
  },
});
