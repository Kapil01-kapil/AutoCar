import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SimpleInput} from '../../components/Form';
import {FormButton} from '../../components/Button';
import MyTheme from '../../constants/Theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../store/actions/Auth';
import {api_url, fcm_token} from '../../api/Api';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
const Login = (props) => {
  const {navigation} = props;
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.userId);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    checkLogin();
  }, []);
  useEffect(() => {
    if (error) {
      Toast.show(' Please enter a valid email password');
      console.log(error);
    }
  }, [error]);

  const authHandler = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mob = /^[0]?[789]\d{9}$/;
    let action;
    if (reg.test(email) == '') {
      Toast.show('Email is empty', Toast.LONG);
    } else if (password == '') {
      Toast.show('Password is empty', Toast.LONG);
    } else {
      action = authActions.login(email, password);

      setError(null);
      setIsLoading(true);
      try {
        await dispatch(action);
        handleSubmit();
        console.log('gf');
        Toast.show(' successfully Login');
        // props.navigation.navigate("Dreawer");
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = () => {
    let body = {
      email: email,
      password: password,
      fcm_token: fcm_token,
    };
    axios
      .post(`${api_url}auth/customer/login`, body)
      .then(function (response) {
        // handle success
        console.log(response.data.user.status);
        if (response.data.user.status == 'pending') {
          props.navigation.navigate('LoginVerification', {
            id: response.data.user.profile.id,
            phone: response.data.user.profile.phone,
          });
        } else {
          props.navigation.replace('home');
        }
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        //alert("Finally called");
      });
  };
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>
    );
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={require('../../assests/images/back2.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['transparent', '#000', '#000']}
          // style={styles.overlay}
          // start={{ x: 0, y: 0}} end={{ x: 1, y: 0.5 }}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
          }}
        />

        <View style={styles.headerTitle}>
          <Text style={styles.heading}>
            <Text style={{fontSize: 50, fontFamily: 'Poiret'}}>L</Text>ogin
          </Text>
          <Text style={styles.subHeading}>Login to your account</Text>
          <View style={styles.form}>
            <SimpleInput placeholder="Email" onChangeText={setEmail} />
            <SimpleInput
              placeholder="Password"
              onChangeText={setPassword}
              secureEntry={true}
            />
            <FormButton
              title="Login"
              onPress={authHandler}
              CTextStyle={{
                backgroundColor: MyTheme.colors.primary,
                fontSize: 16,
                padding: 12,
              }}
            />

            <View style={styles.navigateOuter}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('forgotPasswordEmail')}>
                <Text style={styles.navigateText}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.navigateOuter}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('register')}>
                <Text style={styles.navigateText}>
                  Don't have account?
                  <Text style={styles.spclBtn}> Sign up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  headerTitle: {
    alignItems: 'center',
  },
  heading: {
    color: MyTheme.colors.white,
    fontSize: 40,
    fontFamily: 'Poiret',
  },
  subHeading: {
    fontSize: 18,
    color: MyTheme.colors.text,
    paddingVertical: 5,
    paddingBottom: 0,
    fontFamily: 'Poiret',
  },
  form: {
    width: '95%',
    // backgroundColor: '#fff',
    padding: 15,
    paddingVertical: 25,
    position: 'relative',
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  navigateOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  navigateText: {
    fontFamily: 'Poiret',
    fontSize: 14,
    padding: 10,
    color: MyTheme.colors.text,
  },
  spclBtn: {
    fontFamily: 'Muli-SemiBold',
    color: MyTheme.colors.primary,
  },
});

export default Login;
