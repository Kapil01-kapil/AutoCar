import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MyTheme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QuotesCard = (props) => {
  const {navigation, data} = props;
  return (
    <View style={styles.cardOuter}>
      <TouchableOpacity
        onPress={() => navigation.navigate('quoteDetail', {data: data})}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={styles.row}>
            <Image
              source={require('../../assests/images/star.png')}
              resizeMode={'contain'}
              style={styles.logo}
            />
            <Text style={styles.title}>
              {data ? data.title : 'Star Workshops'}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon
              name="location-on"
              color="#FFCA3A"
              size={20}
              style={styles.logo}
            />
            <Text style={styles.location}>Location</Text>
          </View>
        </View>
        <Text style={styles.status}>Quote offered $ 120</Text>
        <Text style={styles.comment}>Comments : </Text>
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
    borderLeftWidth: 8,
    borderColor: '#A5A5A5',
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
    fontSize: 18,
  },

  location: {
    fontSize: 12,
    color: '#c5c5c5',
    fontFamily: 'Muli-Light',
  },
  status: {
    fontSize: 14,
    color: '#c5c5c5',
    fontFamily: 'Muli-Light',
    paddingVertical: 4,
  },
  comment: {
    fontSize: 14,
    color: '#c5c5c5',
    fontFamily: 'Muli-Light',
    paddingVertical: 4,
  },
});

export default QuotesCard;
