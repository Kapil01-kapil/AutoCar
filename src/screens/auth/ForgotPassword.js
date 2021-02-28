/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {InputWithImage} from '../../components/Form';
import {FormButton} from '../../components/Button';
import MyTheme from '../../constants/Theme';
import OtpInputs from 'react-native-otp-inputs';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
// const {width, height} = Dimensions.get('screen');
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../store/actions/Auth';
const ForgotPassword = (props) => {
  const otpRef = React.createRef();

  const [error, setError] = useState();
  const UserId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  // const [fcm_token, setfcm_token] = React.useState("14");

  const [isLoading, setIsLoading] = useState(false);
  const {navigation} = props;
  const [code, setCode] = useState(null);

  useEffect(() => {
    otpRef.current.focus();
  }, []);
  useEffect(() => {
    if (error) {
      Toast.show(' Please enter a valid otp');
      console.log(error);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    action = authActions.resetOtp(code, UserId.userid);

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);

      console.log('gf');
      props.navigation.navigate('reset');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.goBack()}>
        <Icon
          name={'keyboard-backspace'}
          size={30}
          color={MyTheme.colors.white}
        />
        {isLoading && <ActivityIndicator size={'large'} color={'white'} />}
      </TouchableOpacity>
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.heading}>{'Forgot password'}</Text>
          <Image
            source={require('../../assests/images/forgot.png')}
            resizeMode={'contain'}
            style={styles.logo}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              lineHeight: 24,
              paddingHorizontal: 40,
              paddingTop: 25,
              color: MyTheme.colors.white,
              fontFamily: 'Poiret',
            }}>
            Please enter the OTP sent on your registered number
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingTop: 5,
              color: MyTheme.colors.primary,
              paddingBottom: 20,
            }}>
            {' '}
            +91**********
          </Text>
        </View>
        <OtpInputs
          ref={otpRef}
          style={styles.inputOtp}
          handleChange={(otpCode) => setCode(otpCode)}
          numberOfInputs={4}
          inputStyles={styles.otpBox}
        />
      </ScrollView>
      <FormButton
        title="Submit"
        onPress={authHandler}
        CTextStyle={{borderRadius: 0, padding: 12, fontFamily: 'Muli'}}
        cStyle={{padding: 0, paddingTop: 8}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303237',
    alignItems: 'center',
    paddingTop: '30%',
    // justifyContent: 'center',
    // paddingHorizontal: 20,
  },
  arrowBack: {
    position: 'absolute',
    top: 15,
    left: 15,
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: 15,
    color: '#fff',
    fontFamily: 'Poiret',
    lineHeight: 35,
    letterSpacing: 2,
  },
  form: {
    backgroundColor: '#fff',
    width: wp('90%'),
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: MyTheme.colors.border,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  navigateOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  navigateText: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    padding: 10,
    color: MyTheme.colors.text,
  },
  logo: {
    height: 60,
    width: 60,
  },
  // Otp

  inputOtp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  otpBox: {
    flex: 1,
    backgroundColor: MyTheme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Muli',
    color: MyTheme.colors.white,
  },
});

export default ForgotPassword;
