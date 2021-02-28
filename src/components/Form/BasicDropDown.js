import React from 'react';
import { View, StyleSheet, Text, Alert, Dimensions } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import MyTheme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/AntDesign';

export default ({ items, onSelect, name, value }) => {
  const dropdownOnselect = (value) => {
    if (value) {
      onSelect(value);
    } else {
      onSelect(0);
    }
    console.log('selected Value - ', value);
  };

  return (
    <View style={styles.formElement}>
      <RNPickerSelect
        items={items}
        onValueChange={(value) => dropdownOnselect(value)}
        value={value}
        color={MyTheme.colors.white}
        style={{
          ...pickerSelectStyles,
          fontFamily: 'Poiret',
          iconContainer: {
            top: 4,
            right: 12,
          },
          inputAndroid: {
            color: MyTheme.colors.white,
            padding: 0,
            fontSize: 12,
            fontFamily: 'Poiret',
          },
          placeholder: {
            color: MyTheme.colors.white,
            fontFamily: 'Poiret',
          },
        }}
        placeholder={{
          label: `${name}`,
          fontSize: 10,
        }}
        Icon={() => {
          return (
            <Icon name="caretdown" size={16} color={MyTheme.colors.white} />
          );
        }}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formElement: {
    borderRadius: 30,
    padding: 10,
    borderWidth: 1,
    backgroundColor: MyTheme.colors.primary,
    borderColor: MyTheme.colors.primary,
    marginBottom: 12,
    fontFamily: 'Poiret',
    width: '100%',
    justifyContent: 'space-between',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    fontSize: 12,
    padding: 0,
    fontFamily: 'Poiret',
  },
  inputAndroid: {
    flex: 1,
    fontSize: 12,
    padding: 0,
    fontFamily: 'Poiret',
  },
});
