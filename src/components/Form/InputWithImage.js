/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import MyTheme from '../../constants/Theme';

const {width, height} = Dimensions.get('window');
const InputWithImage = (props) => {
  const {
    placeholder,
    navigation,
    numeric,
    secureEntry,
    onChangeText,
    imagePath,
    iconStyle,
    cStyle,
    inputStyle,
    maxlength,
    editable,
    value,
    placeholderColor,
  } = props;

  return (
    <View style={[styles.formElement, cStyle]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor ? placeholderColor : "#c5c5c5"}
        style={[styles.input, inputStyle]}
        keyboardType={numeric}
        secureTextEntry={secureEntry}
        maxLength={maxlength}
        onChangeText={(input) => onChangeText(input)}
        editable={editable}
      />
      <Image
        source={imagePath}
        resizeMode="contain"
        style={[styles.icon, iconStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 15,
    width: 15,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    padding: 0,
    fontFamily: 'MontserratThin',
    color: MyTheme.colors.white,
  },
  formElement: {
    borderRadius: 30,
    padding: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: MyTheme.colors.primaryDark,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
});

export default InputWithImage;
