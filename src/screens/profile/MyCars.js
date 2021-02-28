import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SimpleHeader} from '../../components/Header';
import MyTheme from '../../constants/Theme';
import {CardLayout} from '../../components/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import * as BestQuote from '../../store/actions/BestQuotes';
const Mycars = (props) => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const GetCars = useSelector((state) => state.BestQuotes.get_cars);
  const dispatch = useDispatch();
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(BestQuote.get_cars());
      console.log('name', GetCars);
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);
  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);
  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(BestQuote.deleteProduct(id));
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
      <SimpleHeader title="My Cars" {...props} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.cardOuter}>
          <Text style={styles.heading}>Saved Car Details</Text>

          <FlatList
            onRefresh={loadProducts}
            ListEmptyComponent={_listEmptyComponent}
            refreshing={isRefreshing}
            data={GetCars}
            renderItem={({item}) => (
              <CardLayout
                delete={deleteHandler.bind(
                  this,

                  item.id,
                )}
                name={item.vin_number}
                regNo={item.registration_number}
              />
            )}
            keyExtractor={(item) => item.id}
          />

          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('addCar')}>
            <View style={styles.row}>
              <Icon
                name="ios-add"
                size={25}
                color={MyTheme.colors.primaryDark}
              />
              <Text style={styles.addCar}>Add Car</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  cardOuter: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  heading: {
    color: MyTheme.colors.white,
    fontSize: 16,
    marginBottom: 15,
    fontFamily: 'Muli',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  addCar: {
    fontSize: 16,
    color: MyTheme.colors.white,
    paddingLeft: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: 'Muli-Light',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Mycars;
