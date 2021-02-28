import React from 'react';
import {View, StyleSheet, Text, Alert, Dimensions} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import MyTheme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/AntDesign';

export default ({items, onSelect, name, value, title}) => {
  const dropdownOnselect = (value) => {
    if (value) {
      onSelect(value);
    } else {
      onSelect(0);
    }
    console.log('selected Value - ', value);
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.formElement}>
        <RNPickerSelect
          items={items}
          onValueChange={(value) => dropdownOnselect(value)}
          value={value}
          color={MyTheme.colors.white}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 4,
              right: 12,
            },
            inputAndroid: {
              color: MyTheme.colors.white,
              padding: 0,
              fontSize: 12,
            },
            placeholder: {
              color: MyTheme.colors.white,
            },
          }}
          placeholder={{
            label: `${name}`,
            fontSize: 10,
          }}
          Icon={() => {
            return (
              <Icon name="caretdown" size={20} color={MyTheme.colors.white} />
            );
          }}
          useNativeAndroidPickerStyle={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formElement: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#303237',
    marginBottom: 12,
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: MyTheme.colors.white,
    marginBottom: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    fontSize: 12,
    padding: 0,
    fontFamily: 'Montserrat',
  },
  inputAndroid: {
    flex: 1,
    fontSize: 12,
    padding: 0,
    fontFamily: 'Montserrat',
  },
});
