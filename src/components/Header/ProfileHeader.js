/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-filename-extension */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import MyTheme from '../../constants/Theme';
const {width, height} = Dimensions.get('window');
const ProfileHeader = (props) => {
  const {title, navigation} = props;

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.leftSide}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goBack}>
            <Icon
              name="md-arrow-round-back"
              size={25}
              color={MyTheme.colors.text}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.centerSide}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightSide}>
          <TouchableOpacity
            onPress={() => navigation.navigate('settings')}
            style={styles.goBack}>
            <MIcon name="settings" size={25} color={MyTheme.colors.red} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goBack: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconOuter: {
    marginHorizontal: 10,
    paddingHorizontal: 5,
    position: 'relative',
  },
  title: {
    fontSize: 28,
    color: MyTheme.colors.white,
    // fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'Poiret',
  },
});

export default ProfileHeader;
