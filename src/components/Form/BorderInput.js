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
const BorderInput = (props) => {
  const {
    title,
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
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor ? placeholderColor : '#c5c5c5'}
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
  title: {
    fontSize: 16,
    color: MyTheme.colors.white,
    marginBottom: 10,
    fontFamily: 'Muli',
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Muli-Light',
    color: MyTheme.colors.white,
    padding: 6,
    paddingHorizontal: 12,
    backgroundColor: '#303237',
    borderRadius: 8,
  },
  formElement: {
    marginBottom: 12,
  },
});

export default BorderInput;
