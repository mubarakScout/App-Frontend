import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {horizontalScale, moderateScale, verticalScale} from '../../utils/Dim';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import BgImage from '../components/BgImage';
import {ScrollView} from 'react-native-gesture-handler';
import NewActivity from '../dummyData/NewActivity';
const HomeScreen = () => {
  const navigation = useNavigation();
  const name = useSelector(state => state.user.name);
  const [data, setData] = useState(NewActivity);
  return (
    <SafeAreaView style={{flex: 1}}>
      <BgImage op={0.1} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            resizeMode="contain"
            source={require('../../assets/mubarak.png')}
            style={{
              width: horizontalScale(70),
              height: verticalScale(70),
              marginLeft: horizontalScale(-5),
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text style={{color: 'white', fontWeight: '500', fontSize: 18}}>
            WELCOME..!
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: '400',
              fontSize: 16,
            }}>
            SCOUT {name.toUpperCase()}
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Ionicons name="search" size={30} color={'white'} />
        </View>
      </View>

      {/* Main Start */}
      <View style={{paddingHorizontal: horizontalScale(20)}}>
        {/* New activity */}
        <View style={styles.bannerContainer}>
          <Text
            style={{
              fontSize: moderateScale(20),
              fontWeight: '600',
              marginVertical: verticalScale(5),
            }}>
            New Activity
          </Text>
          {/* <View> */}
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity>
                <Image
                  source={item.image}
                  style={{
                    width: '100%',
                    height: verticalScale(200),
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />

          {/* </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#146C38',
    height: verticalScale(100),
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,

    flexDirection: 'row',
  },
  bannerContainer: {
    width: '100%',
    marginTop: verticalScale(15),
  },
});
