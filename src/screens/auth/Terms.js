import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import MyTheme from '../../constants/Theme';
import {SimpleHeader} from '../../components/Header';
const Terms = (props) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={require('../../assests/images/background.png')}
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
        <SimpleHeader title="Terms & Conditions" {...props} />
        <ScrollView
          style={{
            flex: 1,
            padding: 10,
            paddingVertical: 20,
            paddingBottom: 50,
          }}>
          <Text style={styles.heading}>Terms and Conditions</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        </ScrollView>
        <View style={styles.blankSpace} />
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: hp('100%') - 50,
    position: 'relative',
  },
  heading: {
    fontWeight: 'bold',
    color: MyTheme.colors.primary,
    paddingBottom: 4,
    marginBottom: 10,
    fontSize: 15,
  },
  text: {
    color: MyTheme.colors.white,
    fontSize: 14,
    letterSpacing: 0.6,
    lineHeight: 22,
    marginBottom: 15,
  },
});

export default Terms;
