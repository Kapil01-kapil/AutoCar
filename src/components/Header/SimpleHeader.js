/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
 View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MyTheme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
const SimpleHeader = (props) => {
  const {title, navigation} = props;

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goBack}>
        <Icon
          name="md-arrow-round-back"
          size={25}
          color={MyTheme.colors.text}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    paddingHorizontal:5,
    paddingVertical: 15,
    flexDirection: 'row',
    // borderBottomWidth: 0.2,
    // borderColor: MyTheme.colors.lightBorder,
    alignItems: 'center',
    // backgroundColor: MyTheme.colors.white,
  },
  goBack: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  title: {
    fontSize: 28,
    color: MyTheme.colors.white,
    // fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'Poiret',
  },
});

export default SimpleHeader;
