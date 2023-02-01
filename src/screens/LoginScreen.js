import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {verticalScale, horizontalScale, moderateScale} from '../../utils/Dim';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passtHide, setPassHide] = useState(true);
  const navigation = useNavigation();

  function handleLogin() {
    // navigation.navigate('DrawerNavigator');
    navigation.dispatch(StackActions.replace('DrawerNavigator'));
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/Camp.png')}
        resizeMode="cover"
        style={styles.image}></ImageBackground>

      {/* top green container */}
      <View style={styles.greenContainer} />

      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={require('../../assets/mubarak.png')}
          style={{
            width: horizontalScale(180),
            height: verticalScale(180),
          }}
        />
        <Text
          style={{
            fontWeight: '700',
            fontSize: moderateScale(40),
            color: 'black',
          }}>
          Login
        </Text>
      </View>
      {/* first field */}
      <View style={styles.fieldContainer}>
        <View style={{marginTop: verticalScale(10)}}>
          <Text style={styles.fieldText}>User Name</Text>
          <View style={styles.fieldStyle}>
            <Ionicons name="person" size={30} color={'gray'} />
            <TextInput
              placeholder="User Name"
              style={{
                fontSize: moderateScale(18),
                fontWeight: 'bold',
                marginLeft: 10,
              }}
              // secureTextEntry={true}
              value={userName}
              onChangeText={text => {
                setUserName(text);
              }}
            />
          </View>
        </View>
        {/* second Field */}
        <View style={{marginTop: verticalScale(15)}}>
          <Text style={styles.fieldText}>Password</Text>
          <View style={styles.fieldStyle}>
            <Ionicons name="lock-closed" size={30} color={'gray'} />
            <TextInput
              placeholder="Password"
              style={{
                fontSize: moderateScale(18),
                fontWeight: 'bold',
                marginLeft: horizontalScale(10),
                flex: 1,
              }}
              secureTextEntry={passtHide}
              value={userPassword}
              onChangeText={text => {
                setUserPassword(text);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setPassHide(!passtHide);
              }}>
              <Ionicons name={passtHide ? 'eye-off' : 'eye'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            handleLogin();
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: moderateScale(20),
            }}>
            Login
          </Text>
          <Ionicons name="arrow-forward-circle-sharp" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  greenContainer: {
    width: horizontalScale(336),
    height: verticalScale(336),
    position: 'absolute',
    left: horizontalScale(-177),
    borderRadius: moderateScale(500),
    top: verticalScale(-120),
    backgroundColor: '#146C38',
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  textHere: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  fieldContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(40),
  },
  fieldText: {
    fontSize: moderateScale(18),
    marginHorizontal: horizontalScale(15),
    marginVertical: verticalScale(5),
    color: 'black',
    fontWeight: '500',
  },
  fieldStyle: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: moderateScale(20),
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
  },
  btnStyle: {
    backgroundColor: '#146C38',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    marginVertical: verticalScale(20),
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
