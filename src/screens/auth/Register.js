import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {SimpleInput} from '../../components/Form';
import {FormButton} from '../../components/Button';
import MyTheme from '../../constants/Theme';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../store/actions/Auth';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Register = (props) => {
  const {navigation} = props;
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.userId);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [password_confirmation, setpassword_confirmation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    if (error) {
      Toast.show(' Registration faile');
      console.log(error);
    }
  }, [error]);
  const authHandler = async () => {
    let action;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mob = /^[0]?[789]\d{9}$/;
    if (name == '') {
      Toast.show('name is empty', Toast.LONG);
    } else if (reg.test(email) == '') {
      Toast.show('Please enter the valid email id', Toast.LONG);
    } else if (mob.test(phone) == '') {
      Toast.show('Please enter the valid mobile', Toast.LONG);
    } else if (password == '') {
      Toast.show('Password is empty', Toast.LONG);
    } else if (password != password_confirmation) {
      Toast.show('Confirm password is empty', Toast.LONG);
    } else {
      action = authActions.Register(
        name,
        email,
        phone,
        password,
        password_confirmation,
      );
      console.log(name, email, phone, password, password_confirmation);
      setError(null);
      setIsLoading(true);
      try {
        await dispatch(action);
        props.navigation.navigate('verification', {phone: phone});
        console.log('gf');
        Toast.show('Please enter the otp number ');
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={require('../../assests/images/back1.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['transparent', '#000', '#000']}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
          }}
        />

        <TouchableOpacity
          style={styles.arrowBack}
          onPress={() => navigation.goBack()}>
          <Icon
            name={'keyboard-backspace'}
            size={30}
            color={MyTheme.colors.white}
          />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.heading}>
            <Text style={{fontSize: 50, fontFamily: 'Poiret'}}>S</Text>ign{' '}
            <Text style={{fontSize: 50, fontFamily: 'Poiret'}}>U</Text>p
          </Text>
          {isLoading && <ActivityIndicator size={'large'} color={'white'} />}
          <View style={styles.form}>
            <SimpleInput placeholder="Full Name" onChangeText={setName} />
            <SimpleInput
              placeholder="Enter Email Address"
              onChangeText={setEmail}
            />
            <SimpleInput
              placeholder="Mobile Number"
              onChangeText={setPhone}
              numeric={'numeric'}
              maxlength={12}
            />
            <SimpleInput
              placeholder="Password"
              onChangeText={setPassword}
              secureEntry={true}
            />
            <SimpleInput
              placeholder="Confirm Password"
              onChangeText={setpassword_confirmation}
              secureEntry={true}
            />
            <View style={styles.row}>
              <CheckBox
                style={{paddingRight: 15, paddingLeft: 10}}
                onClick={() => handleCheck()}
                isChecked={isChecked}
                checkBoxColor={MyTheme.colors.white}
              />
              <TouchableOpacity onPress={() => navigation.navigate('terms')}>
                <Text style={styles.acceptConditions}>
                  Accept Terms & Conditions
                </Text>
              </TouchableOpacity>
            </View>

            <FormButton
              title="Sign up"
              onPress={authHandler}
              CTextStyle={{
                backgroundColor: MyTheme.colors.primary,
                fontSize: 16,
                padding: 12,
              }}
            />
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
  arrowBack: {
    position: 'absolute',
    top: 15,
    left: 15,
    padding: 20,
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
    fontSize: 16,
    color: MyTheme.colors.text,
    paddingVertical: 5,
  },
  form: {
    width: '95%',
    // backgroundColor: '#fff',
    padding: 15,
    position: 'relative',
    marginTop: 10,
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
    fontFamily: 'Montserrat',
    fontSize: 14,
    padding: 10,
    color: MyTheme.colors.text,
  },
  spclBtn: {
    fontFamily: 'MontserratBold',
    color: MyTheme.colors.primary,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  acceptConditions: {
    color: MyTheme.colors.white,
    fontFamily: 'Poiret',
    fontSize: 16,
  },
});

export default Register;
