import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MyTheme from '../../constants/Theme';

const NotificationCard = (props) => {
  const {navigation, time, title, onPress} = props;
  return (
    <View style={styles.outer}>
      <View style={styles.circle}></View>
      <View style={styles.cardOuter}>
        <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>click here</Text>
          </TouchableOpacity>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#4D4D4D',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
  },
  cardOuter: {
    paddingLeft: 15,
    width: '95%',
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: MyTheme.colors.white,
  },
  text: {
    color: '#bdbdbd',
    fontSize: 16,
    fontFamily: 'Muli',
    // paddingRight: 10,
    marginBottom: 5,
  },
  subText: {
    color: '#bdbdbd',
    fontSize: 11,
    lineHeight: 16,
    fontFamily: 'Montserrat',
    // paddingRight: 10,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Montserrat',
  },
  btnText: {
    fontFamily: 'Muli',
    color: '#6E7E44',
    fontSize: 15,
  },
});
export default NotificationCard;
