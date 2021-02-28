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
  TouchableHighlight,
} from 'react-native';
import MyTheme from '../../constants/Theme';

const {width, height} = Dimensions.get('window');
const BottomBorderInput = (props) => {
  const {
    placeholder,
    navigation,
    numberOfLines,
    multiline,
    numeric,
    secureEntry,
    onChangeText,
    imagePath,
    iconStyle,
    inputStyle,
    cStyle,
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
        placeholderTextColor={placeholderColor ? placeholderColor : '#fff'}
        style={[styles.input, inputStyle]}
        keyboardType={numeric}
        secureTextEntry={secureEntry}
        maxLength={maxlength}
        numberOfLines={numberOfLines}
        multiline={multiline}
        onChangeText={(input) => onChangeText(input)}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 14,
    padding: 0,
    fontFamily: 'Muli',
    color: MyTheme.colors.white,
  },
  formElement: {
    padding: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#5B5C5E',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
});

export default BottomBorderInput;
