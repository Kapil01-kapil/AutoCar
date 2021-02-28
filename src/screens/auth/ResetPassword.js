import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {SimpleInput} from '../../components/Form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {SimpleHeader} from '../../components/Header';
import MyTheme from '../../constants/Theme';
import {FormButton} from '../../components/Button';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../store/actions/Auth';
const ResetPassword = (props) => {
  const [password, setPassword] = useState(null);
  const [cnfPassword, setCnfPassword] = useState(null);
  const email = useSelector((state) => state.auth.email);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (error) {
      Toast.show(' Please enter a valid  password');
      console.log(error);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    if (password == '') {
      Toast.show('Password is empty', Toast.LONG);
    } else if (password != cnfPassword) {
      Toast.show('Confirmpassword is empty', Toast.LONG);
    } else {
    }
    action = authActions.resetPassword(password, cnfPassword, email);
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      Toast.show('successfully reset password ');
      console.log('gf');
      props.navigation.navigate('login');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <SimpleHeader title="Reset Password" {...props} />
      <KeyboardAwareScrollView behavior="padding" style={{flex: 1}}>
        {isLoading && <ActivityIndicator size={'large'} color={'white'} />}
        <View style={styles.formOuter}>
          <Text style={styles.head}>Create new Password </Text>
          <SimpleInput
            placeholder={'New Password'}
            secureEntry={true}
            onChangeText={setPassword}
          />
          <SimpleInput
            placeholder={'Confirm Password'}
            secureEntry={true}
            onChangeText={setCnfPassword}
          />
          <FormButton
            title="Submit"
            cStyle={{width: 120}}
            CTextStyle={{
              backgroundColor: MyTheme.colors.primary,
              fontSize: 18,
            }}
            onPress={authHandler}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  formOuter: {
    paddingTop: '20%',
    width: '100%',
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
  head: {
    color: MyTheme.colors.white,
    textAlign: 'center',
    fontFamily: 'Muli',
    fontSize: 16,
    marginBottom: 15,
  },
});
export default ResetPassword;
