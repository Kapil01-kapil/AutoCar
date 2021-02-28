import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {SimpleHeader} from '../../components/Header';
import MyTheme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {PaymentCard} from '../../components/Card';
import {useSelector, useDispatch} from 'react-redux';
import * as BestQuote from '../../store/actions/BestQuotes';
const MyCards = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const get_cards = useSelector((state) => state.BestQuotes.get_cards);
  const dispatch = useDispatch();
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(BestQuote.get_cards());
      console.log('name', get_cards);
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);
  useEffect(() => {
    console.log('name', get_cards);
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

  useEffect(() => {
    console.log('get_cards==========>', get_cards);
  }, []);
  const deleteHandler = (
    card_brand,
    card_number,
    expiry_date,
    card_type,
    id,
  ) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(
            BestQuote.delete_Card(
              card_brand,
              card_number,
              expiry_date,
              card_type,
              id,
            ),
          );
        },
      },
    ]);
  };
  const _listEmptyComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#FFF',
            marginVertical: 15,
            textAlign: 'center',
            fontSize: 20,
          }}>
          No item found
        </Text>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <SimpleHeader title="Payment methods" {...props} />
      <ScrollView
        style={{flex: 1}}
        onRefresh={loadProducts}
        refreshing={isRefreshing}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('onlinePayment')}>
            <View style={[styles.row, styles.addCarOuter]}>
              <Icon
                name="ios-add"
                size={35}
                color={MyTheme.colors.primaryDark}
              />
              <Text style={styles.addCar}>Add a Payment</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.paymentMethods}>
            <FlatList
              onRefresh={loadProducts}
              refreshing={isRefreshing}
              data={get_cards}
              ListEmptyComponent={_listEmptyComponent}
              renderItem={({item, index}) => (
                <PaymentCard
                  type={item.card_brand}
                  card={item.card_number}
                  delete={deleteHandler.bind(
                    this,
                    item.card_brand,
                    item.card_number,
                    item.expiry_date,
                    item.card_type,
                    item.id,
                  )}
                />
              )}
              keyExtractor={(item) => item.id}
            />

            <TouchableOpacity>
              <View style={[styles.row, {padding: 10, paddingVertical: 5}]}>
                <Image
                  source={require('../../assests/images/cod.png')}
                  resizeMode="contain"
                  style={styles.icon}
                />
                <View>
                  <Text style={styles.cash}>Cash</Text>
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
  row: {flexDirection: 'row', alignItems: 'center'},
  addCar: {
    fontSize: 18,
    color: MyTheme.colors.white,
    paddingLeft: 10,
    letterSpacing: 1,
    fontFamily: 'Muli-Light',
  },
  addCarOuter: {
    paddingVertical: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#c5c5c540',
  },
  paymentMethods: {
    paddingVertical: 20,
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 15,
  },
  cash: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Muli',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default MyCards;
