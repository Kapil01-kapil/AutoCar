import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MyTheme from '../../constants/Theme';

const StatusSpecs = (props) => {
  const {navigation, data} = props;

  return (
    <View style={styles.row}>
      <Text style={styles.head}>vechile repair</Text>
      <View style={[styles.row, styles.right]}>
        <Text style={{color: MyTheme.colors.white}}>:</Text>
        <Image
          source={require('../../assests/images/speed.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.value}>In Progress</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  logo: {
    height: 16,
    width: 16,
    marginHorizontal: 10,
  },
  head: {
    fontSize: 12,
    color: MyTheme.colors.white,
    fontFamily: 'Muli-Light',
    width: '40%',
  },
  right: {
    width: '60%',
  },
  value: {
    fontSize: 12,
    color: MyTheme.colors.white,
    fontFamily: 'Muli-Light',
  },
});

export default StatusSpecs;
