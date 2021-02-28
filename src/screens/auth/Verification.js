import React, {useState, createRef, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FormButton} from '../../components/Button';
import MyTheme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PhoneInput from 'react-native-phone-input';
import Toast from 'react-native-simple-toast';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/Auth';
const Verification = (props) => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const userId = useSelector((state) => state.auth.userId);
  const {phone} = props.route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Earnings', userId);
    setIsLoading(true);
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Toast.show(' Please enter a valid  mobile number');
      console.log(error);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    action = authActions.PhoneVerification(userId.id, phone);
    console.log(userId.id, phone);
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);

      Toast.show('successfully Verification');
      props.navigation.navigate('phoneVerification');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const phoneTel = createRef();
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
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <View style={styles.formOuter}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.heading}>{'Verify your \n phone number'}</Text>
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
              We have sent you an SMS with a code to number {phone}
            </Text>
          </View>

          <View style={styles.formElement}>
            <PhoneInput
              initialCountry="in"
              ref={phoneTel}
              flagStyle={{
                borderRightWidth: 1,
                height: 20,
                width: 25,
                borderColor: MyTheme.colors.primary,
              }}
              textProps={{placeholder: '+91', value: phone}}
              textStyle={{
                borderLeftWidth: 1,
                borderColor: MyTheme.colors.primary,
                paddingLeft: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>
      <FormButton
        title="Next"
        onPress={authHandler}
        CTextStyle={{
          borderRadius: 0,
          fontFamily: 'Muli',
          backgroundColor: MyTheme.colors.primary,
          fontSize: 15,
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
    paddingBottom: 15,
    color: '#fff',
    fontFamily: 'Poiret',
    lineHeight: 35,
    letterSpacing: 2,
  },
  formOuter: {
    flex: 1,
    paddingHorizontal: '10%',
  },
  formElement: {
    backgroundColor: MyTheme.colors.white,
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
  },
});

export default Verification;
