import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyTheme from '../../constants/Theme';

const NotificationList = (props) => {
    const {cStyle, data} = props;

  return (
    <View style={[styles.card, cStyle]}>
      <Text style={styles.text}>
        {data ? data.text : 'NA'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 5,
    paddingLeft: 20,
    borderLeftWidth: 6,
    marginBottom: 10,
  },
  text: {
      color: MyTheme.colors.white,
      fontSize: 14,
      fontFamily : 'Poiret',
  }
});
export default NotificationList;
