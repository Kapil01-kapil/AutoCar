import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SimpleHeader} from '../../components/Header';
import MyTheme from '../../constants/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import * as BestQuote from '../../store/actions/BestQuotes';
const BestQuot = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const BestQuotes = useSelector((state) => state.BestQuotes.BestQuotes);
  const dispatch = useDispatch();
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(BestQuote.BestQuotes());
      console.log('name', BestQuotes);
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
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
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
  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <SimpleHeader title={'Best quotes for you'} {...props} />
      <View style={styles.container}>
        <FlatList
          data={BestQuotes}
          onRefresh={loadProducts}
          ListEmptyComponent={_listEmptyComponent}
          refreshing={isRefreshing}
          renderItem={({item, index}) => (
            <View style={styles.cardOuter}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('quoteDetail', {
                    workshop: item.workshop,
                    id: item.id,
                    workshop_id: item.ID,
                    address: item.address,
                    city: item.city,
                  })
                }>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                  <View style={styles.row}>
                    <Image
                      source={require('../../assests/images/star.png')}
                      resizeMode={'contain'}
                      style={styles.logo}
                    />
                    <Text style={styles.title}>{item.workshop}</Text>
                  </View>
                  <View style={styles.row}>
                    <Icon
                      name="location-on"
                      color="#FFCA3A"
                      size={20}
                      style={styles.logo}
                    />
                    <View>
                      <Text style={styles.location}>{item.address}</Text>
                      <Text style={styles.location}>{item.city}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.status}>Quote offered $ 120</Text>
                <Text style={styles.comment}>Comments : {item.comments}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  nodataViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
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

export default BestQuot;
