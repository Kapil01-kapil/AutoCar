import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MyTheme from '../../constants/Theme';

const Settings = (props) => {
  const {text, image, onPress, cStyle} = props;
  return (
    <TouchableOpacity
      style={[styles.row, styles.settingLink]}
      onPress={onPress}>
      <Image
        source={image}
        resizeMode="contain"
        style={[styles.icon, cStyle]}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: MyTheme.colors.white,
    fontFamily: 'MontserratThin',
  },
  settingLink: {
    marginBottom: 25,
  },
});
export default Settings;
