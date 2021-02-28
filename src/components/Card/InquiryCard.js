import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MyTheme from '../../constants/Theme';

const InquiryCard = (props) => {
  const {navigation, data} = props;

  // const onItemClick = (item) => {
  //   onQueryStatus(item.id);
  // };

  // const onQueryStatus = React.useCallback((id) => {
  //   axios
  //     .get(`customer/inquiry/${id}`)
  //     .then((response) => {
  //       navigation.navigate('inquiryStatus', { data: response.data })
  //     })
  //     .catch((err) => true);
  // }, [axios]);

  return (
    <View style={styles.cardOuter}>
      <TouchableOpacity onPress={() => onItemClick(data)}>
        <View style={styles.row}>
          <Image
            source={require('../../assests/images/shine.png')}
            resizeMode={'contain'}
            style={styles.logo}
          />
          <Text style={styles.title}>
            {data ? data.title : 'Star Workshops'}
          </Text>
        </View>
        <View style={[styles.row, {marginVertical: 5}]}>
          {data && data.complete ? (
            <Image
              source={require('../../assests/images/tick.png')}
              resizeMode={'contain'}
              style={styles.logo}
            />
          ) : (
            <Image
              source={require('../../assests/images/speed.png')}
              resizeMode={'contain'}
              style={styles.logo}
            />
          )}
          <Text style={styles.status}>
            {data && data.complete ? 'Completed' : 'In Progress'}
          </Text>
        </View>
        <View style={[styles.row, styles.bottom]}>
          <Text style={styles.id}>id: {data ? data.id : 'id'}</Text>
          {data && data.complete ? (
            <Text style={styles.dispatch}>Dispatch Ready</Text>
          ) : (
            <Text style={styles.time}>
              Last Update : {data ? data.time : ''}
            </Text>
          )}
        </View>
      </TouchableOpacity>
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
    fontFamily: 'Muli-Light',
  },
  status: {
    color: MyTheme.colors.white,
    fontFamily: 'Muli-Light',
    opacity: 0.6,
  },
  bottom: {
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 0.2,
    borderColor: '#c5c5c550',
  },
  id: {
    fontSize: 12,
    color: MyTheme.colors.white,
    fontFamily: 'Muli-Light',
  },
  time: {
    fontSize: 12,
    color: MyTheme.colors.white,
    fontFamily: 'Muli-Light',
  },
  dispatch: {
    fontSize: 12,
    color: '#ADDB32',
    fontFamily: 'Muli-Light',
  },
});

export default InquiryCard;
