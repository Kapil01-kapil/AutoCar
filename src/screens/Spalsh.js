import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {isEmpty} from 'lodash';
import {View, Image} from 'react-native';
const SplashScreen = (props) => {
  const Token = useSelector((state) => state.auth.token);
  useEffect(() => {
    Splash();
  }, []);
  const Splash = () => {
    setTimeout(() => {
      if (isEmpty(Token)) {
        props.navigation.navigate('login');
      } else {
        props.navigation.navigate('home');
      }
    }, 1);
  };

  return (
    <View>
      <Image
        source={require('../assests/images/launch_screen.jpg')}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default SplashScreen;
