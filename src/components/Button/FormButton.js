/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MyTheme from '../../constants/Theme';

const SimpleBtn = ({onPress, title, cStyle, CTextStyle}) => (
  <View style={[styles.button, cStyle]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.buttonText, CTextStyle]}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    minWidth: 150,
    borderRadius: 30,
    marginTop: 15,
    padding: 8,
    width: '100%',
  },
  buttonText: {
    // textTransform: 'uppercase',
    fontSize: 14,
    backgroundColor: MyTheme.colors.primaryDark,
    borderRadius: 30,
    color: MyTheme.colors.white,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Poiret',
  },
});

export default SimpleBtn;
