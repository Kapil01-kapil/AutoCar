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
const SimpleInput = (props) => {
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
    fontFamily: 'Poiret',
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

export default SimpleInput;
