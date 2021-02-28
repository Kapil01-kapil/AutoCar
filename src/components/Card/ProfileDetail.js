import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyTheme from '../../constants/Theme';

const ProfileDetail = (props) => {
  const {heading, value} = props;
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  heading: {
    color: MyTheme.colors.primaryDark,
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Muli',
  },
  text: {
    color: '#98999C',
    fontSize: 14,
    fontFamily: 'Muli',
  },
});
export default ProfileDetail;
