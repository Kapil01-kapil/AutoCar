import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as MyInquriesss from '../../store/actions/MyInquiries';
import MyTheme from '../../constants/Theme';
const Upcoming = (props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const Upcoming = useSelector((state) => state.MyInquiries.MyInquiries);
  const dispatch = useDispatch();
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(MyInquriesss.MyInquiries());
      console.log('name', Upcoming);
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);
  useEffect(() => {
    console.log('name', Upcoming);
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
    <View>
      <FlatList
        data={Upcoming}
        onRefresh={loadProducts}
        ListEmptyComponent={_listEmptyComponent}
        refreshing={isRefreshing}
        renderItem={({item}) => (
          <View style={styles.cardOuter}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('inquiryStatus')}>
              <View style={styles.row}>
                <Image
                  source={require('../../assests/images/shine.png')}
                  resizeMode={'contain'}
                  style={styles.logo}
                />
                <Text style={styles.title}>{item.workshop}</Text>
              </View>
              <View style={[styles.row, {marginVertical: 5}]}>
                <Image
                  source={require('../../assests/images/tick.png')}
                  resizeMode={'contain'}
                  style={styles.logo}
                />

                <Text style={styles.status}>{item.status}</Text>
              </View>
              <View style={[styles.row, styles.bottom]}>
                <Text style={styles.id}>id:{item.ID} </Text>

                <Text style={styles.time}>Last Update : {item.updated_at}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default Upcoming;
