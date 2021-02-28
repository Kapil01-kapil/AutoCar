import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SimpleHeader} from '../../components/Header';
import MyTheme from '../../constants/Theme';
import {SettingsLink} from '../../components/Card';
import {useSelector, useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/Auth';
const Settings = (props) => {
  const {navigation} = props;
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const logoutUser = async () => {
    let action;
    action = authActions.Logout();
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      navigation.navigate('login');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <SimpleHeader title="Settings" {...props} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.SettingOuter}>
          <SettingsLink
            image={require('../../assests/images/contact-us.png')}
            text={'Contact Us'}
          />
          <SettingsLink
            image={require('../../assests/images/privacy.png')}
            text={'Privacy Policy'}
            onPress={() => navigation.navigate('privacyPolicy')}
          />
          <SettingsLink
            image={require('../../assests/images/terms.png')}
            text={'Terms and Conditions'}
            cStyle={{height: 16, width: 16}}
            onPress={() => navigation.navigate('termsConditions')}
          />
          <SettingsLink
            image={require('../../assests/images/rating.png')}
            text={'Rate Us'}
          />
          <SettingsLink
            onPress={() => logoutUser()}
            image={require('../../assests/images/rating.png')}
            text={'Log out'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  SettingOuter: {
    padding: 25,
  },
});

export default Settings;
