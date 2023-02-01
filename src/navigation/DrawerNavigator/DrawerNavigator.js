import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  // DrawerItemList,
} from '@react-navigation/drawer';
import BottomNavigator from '../BottomTabNavigator/BottomNavigator';
import HistoryScreen from '../../screens/HistoryScreen';
import ContactScreen from '../../screens/ContactScreen';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dim';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AboutScreen from '../../screens/AboutScreen';
const Drawer = createDrawerNavigator();
const CustomDrawer = props => {
  const navigaton = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#DADADA', height: '100%'}}>
      <ImageBackground
        source={require('../../../assets/hand-sign.png')}
        resizeMode="contain"
        style={styles.image}></ImageBackground>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: '#146C38',
            width: '100%',
            height: verticalScale(150),

            borderBottomRightRadius: moderateScale(100),
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingRight: horizontalScale(80),
              alignItems: 'center',
              marginLeft: horizontalScale(5),
            }}>
            {/* <View> */}
            <Image
              resizeMode="contain"
              source={require('../../../assets/mubarak.png')}
              style={{
                height: verticalScale(80),
                width: horizontalScale(80),
              }}
            />
            {/* </View> */}
            <View style={{marginLeft: horizontalScale(5)}}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
                Welcome To
              </Text>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                Ismaili Mubarak Scout Group, Hyderabad
              </Text>
            </View>
          </View>
        </View>
        {/* scouts view */}
        <View
          style={{
            // justifyContent: 'space-between',
            // alignItems: 'center',
            paddingHorizontal: horizontalScale(12),
            paddingVertical: horizontalScale(12),
          }}>
          <View>
            <Text
              style={{
                fontWeight: '700',
                color: '#146C38',
                fontSize: 32,
              }}>
              SECTIONS
            </Text>
            <ScoutsContainer
              txt={'Shaheen Scout'}
              img={require('../../../assets/ssl.png')}
            />
            <ScoutsContainer
              txt={'Boy Scout'}
              img={require('../../../assets/bs.png')}
            />
            <ScoutsContainer
              txt={'Rover Scout'}
              img={require('../../../assets/rsl.png')}
            />
          </View>
          {/* History and About us */}
          <View
            style={{
              paddingHorizontal: horizontalScale(8),
              marginVertical: verticalScale(25),
            }}>
            <AboutHistorySection
              txt={'History'}
              onPress={() => {
                navigaton.navigate('History');
              }}
            />
            <AboutHistorySection
              txt={'About Us'}
              onPress={() => {
                navigaton.navigate('About');
              }}
            />
          </View>
          {/*  Contact Section*/}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={{fontSize: 22, fontWeight: '500', color: 'black'}}>
                Contact Us
              </Text>
            </TouchableOpacity>
            <Text style={{fontWeight: '400', fontSize: 14, color: 'black'}}>
              Contact No: 92 123 3619
            </Text>
            <Text style={{fontWeight: '400', fontSize: 14, color: 'black'}}>
              Email: ismailimubaraksg@gmail.com
            </Text>
          </View>
        </View>
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#146C38',
          borderTopLeftRadius: 20,
          height: 50,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            textAlign: 'center',
            fontWeight: '400',
          }}>
          Copyrights © The Ismaili Mubarak Scout Group,{'\n'}Hyderabad - All
          rights reserved
        </Text>
      </View>
    </View>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="History" component={HistoryScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    height: verticalScale(500),
    width: Dimensions.get('window').width - 50,
    bottom: verticalScale(0),
    left: -90,
    right: 0,
    bottom: -130,
    opacity: 0.3,
  },
});

const ScoutsContainer = ({img, txt}) => {
  return (
    <View
      style={{
        marginVertical: verticalScale(15),
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        resizeMode="contain"
        source={img}
        style={{width: 35, height: 35}}
      />
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          marginLeft: horizontalScale(10),
          fontWeight: '500',
        }}>
        {txt}
      </Text>
    </View>
  );
};

const AboutHistorySection = ({txt, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: verticalScale(10),
      }}>
      <Text style={{fontWeight: '500', fontSize: 22, color: 'black'}}>
        {txt}
      </Text>
      <Image
        source={require('../../../assets/right-arrow.png')}
        style={{
          height: verticalScale(30),
          width: horizontalScale(30),
        }}
      />
    </TouchableOpacity>
  );
};
