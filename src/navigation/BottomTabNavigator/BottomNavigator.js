import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import HomeScreen from '../../screens/HomeScreen';
import GalleryScreen from '../../screens/GalleryScreen';
import ProfileScreen from '../../screens/ProfileScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotificationScreen from '../../screens/NotificationScreen';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Dim';
import CheckScreen from '../../screens/CheckScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: verticalScale(-30),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
      }}>
      <View
        style={{
          width: horizontalScale(50),
          height: verticalScale(50),
          // borderRadius: moderateScale(80),
          // backgroundColor: '#DADADA',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: '#146C38',

        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // bottom: verticalScale(25),
          // left: horizontalScale(20),
          // right: horizontalScale(20),
          elevation: 3,
          backgroundColor: 'white',
          // borderRadius: moderateScale(15),
          height: verticalScale(90),
          // justifyContent:'center',
          // alignItems:'center'
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: verticalScale(10),
                  // backgroundColor: 'red',
                }}>
                <Image
                  source={require('../../../assets/bottomIcons/home.png')}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? 'white' : 'black',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'white' : 'black',
                    fontSize: moderateScale(13),
                  }}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: verticalScale(10),
                }}>
                <Image
                  source={require('../../../assets/bottomIcons/gallery.png')}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? 'white' : 'black',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'white' : 'black',
                    fontSize: moderateScale(13),
                  }}>
                  Gallery
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="check"
        component={CheckScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../../../assets/mubarak.png')}
                resizeMode="contain"
                style={{
                  width: horizontalScale(86),
                  height: verticalScale(86),
                }}
              />
            );
          },
          tabBarButton: props => {
            return <CustomTabBarButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: verticalScale(10),
                }}>
                <Image
                  source={require('../../../assets/bottomIcons/notification.png')}
                  resizeMode="contain"
                  style={{
                    width: horizontalScale(35),
                    height: verticalScale(35),
                    tintColor: focused ? 'white' : 'black',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'white' : 'black',
                    fontSize: moderateScale(13),
                  }}>
                  Notification
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: verticalScale(10),
                }}>
                <Image
                  source={require('../../../assets/bottomIcons/user.png')}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? 'white' : 'black',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'white' : 'black',
                    fontSize: moderateScale(13),
                  }}>
                  Profile
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
