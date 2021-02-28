import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyTheme from '../../constants/Theme';

const Table = (props) => {
  const {item, sno} = props;

  console.log('Item ', sno);

  return (
    <View style={styles.tableOuter}>
      <Text style={styles.name} numberOfLines={1} ellipsizeMode={'tail'}>
        {sno}. {item ? item.name : 'NA'}
      </Text>
      <Text style={styles.value}>{item ? item.qty : 'NA'} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tableOuter: {
    flexDirection: 'row',
  },
  additionalText: {
    fontSize: 10,
    fontFamily: 'Muli-Light',
    color: MyTheme.colors.white,
  },
  name: {
    color: MyTheme.colors.white,
    fontSize: 12,
    fontFamily: 'Muli-Light',
    width: '70%',
    padding: 5,
    paddingHorizontal: 10,
  },
  value: {
    color: MyTheme.colors.white,
    fontFamily: 'Poiret',
    alignItems: 'center',
    textAlign: 'right',
    width: '30%',
    padding: 5,
    paddingHorizontal: 10,
  },
});

export default Table;
