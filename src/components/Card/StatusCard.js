import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MyTheme from '../../constants/Theme';
import StatusSpecs from './StatusSpecs';

const StatusCard = (props) => {
  const {navigation, data} = props;

  
  return (
    <View style={styles.cardOuter}>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text style={styles.title}>Current Status</Text>
        <Text style={styles.id}>Id: {data ? data.id : 'id'}</Text>
      </View>
      <View style={styles.specifications}>
        <StatusSpecs {...props} data={data} />
        <StatusSpecs {...props} data={data} />
      </View>
      <View style={[styles.row, {marginVertical: 5}]} />
      <View style={[styles.row, styles.bottom]}>
        <Text style={styles.dispatch}>
          Date of Dispatch : <Text style={styles.date}>18/03/2020</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardOuter: {
    padding: 10,
    backgroundColor: '#4d4d4d',
    marginVertical: 5,
    elevation: 4,
    shadowColor: '#000',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  logo: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  title: {
    color: MyTheme.colors.white,
    fontFamily: 'Poiret',
    fontSize: 18,
  },
  status: {
    color: MyTheme.colors.white,
    fontFamily: 'Muli-Light',
    opacity: 0.6,
  },
  bottom: {
    justifyContent: 'flex-end',
    paddingTop: 10,
    borderTopWidth: 0.2,
    borderColor: '#c5c5c550',
  },
  id: {
    fontSize: 12,
    color: MyTheme.colors.white,
    fontFamily: 'Muli-Light',
  },
  dispatch: {
    fontSize: 12,
    color: MyTheme.colors.white,
    fontFamily: 'Poiret',
  },
  date: {
    fontSize: 12,
    color: MyTheme.colors.white,
    fontFamily: 'Muli',
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
  }
});

export default StatusCard;
