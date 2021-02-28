import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SimpleHeader} from '../../components/Header';

const OnlinePayment = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <SimpleHeader title="Online Payment" {...props} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.paymentMethods}>
            <Text style={styles.note}>
              After your first payment we will save your details for future
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('addCard')}>
              <View style={[styles.row, {padding: 10, paddingVertical: 5}]}>
                <Image
                  source={require('../../assests/images/card.png')}
                  resizeMode="contain"
                  style={styles.icon}
                />
                <View>
                  <Text style={styles.cash}>Credit card, Debit card & ATM</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: 20,
  },
  note: {
    fontSize: 14,
    color: '#ffffff95',
    fontFamily: 'Muli-Light',
    marginBottom: 15,
  },
  row: {flexDirection: 'row', alignItems: 'center'},

  addCarOuter: {
    paddingVertical: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#c5c5c540',
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 15,
  },
  cash: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Muli-Light',
  },
});
export default OnlinePayment;
