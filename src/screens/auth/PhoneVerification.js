import React, {useState, useEffect, ActivityIndicator} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {FormButton} from '../../components/Button';
import MyTheme from '../../constants/Theme';
import OtpInputs from 'react-native-otp-inputs';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/Auth';
const PhoneVerification = (props) => {
  const userId = useSelector((state) => state.auth.userId);
  const otpRef = React.createRef();
  const {navigation} = props;
  const [code, setCode] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('userId', userId, userId.id);
    if (error) {
      Toast.show(' Please enter a valid otp');
      console.log(error);
    }
  }, [error]);
  const authHandler = async () => {
    let action;
    action = authActions.PhoneVerification(userId.id, code);

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      props.navigation.navigate('login');
      Toast.show(' successfully Phone Verification');
      console.log('gf');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  const resendOTP = () => {};

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
      </TouchableOpacity>
      <ScrollView style={{flex: 1}}>
        {isLoading && <ActivityIndicator size={'large'} color={'white'} />}
        <View style={styles.formOuter}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.heading}>{'Phone Verification'}</Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                lineHeight: 24,
                marginBottom: 25,
                paddingTop: 10,
                color: '#ffffff',
                opacity: 0.8,
                fontFamily: 'Muil',
              }}>
              Enter your OTP code here
            </Text>
          </View>
          <OtpInputs
            ref={otpRef}
            style={styles.inputOtp}
            handleChange={(otpCode) => setCode(otpCode)}
            numberOfInputs={4}
            inputStyles={styles.otpBox}
          />

          <View style={styles.navigateOuter}>
            <Text style={styles.navigateText}>Didn't receive any code?</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => resendOTP()}>
              <Text style={styles.spclBtn}>Resend a new code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FormButton
        title="Done"
        onPress={authHandler}
        CTextStyle={{
          borderRadius: 0,
          fontFamily: 'Muli-SemiBold',
          backgroundColor: '#D5D5D5',
          color: MyTheme.colors.black,
          textTransform: 'uppercase',
          fontSize: 15,
          paddingHorizontal: 20,
          textAlign: 'right',
        }}
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
    paddingBottom: 10,
    color: '#fff',
    fontFamily: 'Poiret',
    lineHeight: 35,
    letterSpacing: 2,
  },
  formOuter: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  navigateOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  navigateText: {
    fontFamily: 'Poiret',
    fontSize: 16,
    padding: 10,
    paddingBottom: 4,
    color: MyTheme.colors.text,
  },
  spclBtn: {
    fontFamily: 'Muli-SemiBold',
    fontSize: 16,
    color: MyTheme.colors.primary,
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

export default PhoneVerification;
