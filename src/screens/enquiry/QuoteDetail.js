import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SimpleHeader} from '../../components/Header';
import MyTheme from '../../constants/Theme';
import {Table} from '../../components/Table';
import {LightBoxImage} from '../../components/LightBoxImage';
import {useSelector, useDispatch} from 'react-redux';
import * as QuoteDetails from '../../store/actions/BestQuotes';
const QuoteDetail = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const QuoteDetailes = useSelector((state) => state.BestQuotes.QuoteDetail);
  const dispatch = useDispatch();
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(QuoteDetails.QuoteDetails(props.route.params.id));
      console.log('name', QuoteDetailes[0].car_number);
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
  const AcceptScreen = (workshop_id, id, status) => {
    dispatch(QuoteDetails.QuoteDetail(workshop_id, id, status));
  };

  const images = [
    {
      id: 'sdfasf',
      imagePath:
        'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg',
    },
    {
      id: 'dfgsdfg',
      imagePath:
        'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg',
    },
    {
      id: 'adfsgad',
      imagePath:
        'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg',
    },
  ];

  const service = [
    {
      id: 'fasdf',
      name: 'Red Souce Pasta',
      qty: '2',
      price: 100,
    },
    {
      id: 'dgrt',
      name: 'White Souce Pasta',
      qty: '1',
      price: 50,
    },
    {
      id: 'dfgdfgds',
      name: 'Manchurian',
      qty: '1',
      price: 60,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <SimpleHeader title={'Quote Detail'} {...props} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', paddingHorizontal: 10},
            ]}>
            <View style={styles.row}>
              <Image
                source={require('../../assests/images/star.png')}
                resizeMode={'contain'}
                style={styles.logo}
              />
              <Text style={styles.title}>{props.route.params.workshop}</Text>
            </View>
            <View style={styles.row}>
              <Icon
                name="location-on"
                color="#FFCA3A"
                size={20}
                style={styles.logo}
              />
              <View>
                <Text style={styles.location}>
                  {props.route.params.address}
                </Text>
                <Text style={styles.location}>{props.route.params.city}</Text>
              </View>
            </View>
          </View>

          <View style={[styles.row, styles.btnOuter]}>
            <TouchableOpacity
              onPress={AcceptScreen.bind(
                this,
                props.route.params.workshop_id,
                props.route.params.id,
                'quote-accepted',
              )}
              // )} onQuoteResponse("quote-accepted")}
              style={styles.btnTextOuter}>
              <Text style={styles.btnInfo}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={AcceptScreen.bind(
                this,
                props.route.params.workshop_id,
                props.route.params.id,
                'quote-rejected',
              )}
              style={styles.btnTextOuter}>
              <Text style={[styles.commonBtn, {fontFamily: 'Poiret'}]}>
                Reject
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginVertical: 5}}>
            <TouchableOpacity>
              <Text style={[styles.commonBtn, {fontSize: 20}]}>
                Quoted details:
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.Tablehead}>Meals</Text>
              <Text style={[styles.Tablehead, styles.cost]}>Service</Text>
            </View>
            <FlatList
              data={service}
              renderItem={({item, index}) => (
                <Table {...props} item={item} sno={index + 1} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={{marginVertical: 5}}>
            <TouchableOpacity>
              <Text style={[styles.commonBtn, {fontSize: 20}]}>Gallery</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.gallery}>
            {/* <LightBoxImage /> */}
            <FlatList
              data={images}
              renderItem={({item, index}) => (
                <LightBoxImage data={item} {...props} />
              )}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  logo: {
    height: 16,
    width: 16,
    marginHorizontal: 7,
  },
  title: {
    color: MyTheme.colors.white,
    fontFamily: 'Muli-Light',
    fontSize: 15,
  },
  gallery: {
    marginVertical: 15,
  },
  location: {
    fontSize: 12,
    color: '#c5c5c5',
    fontFamily: 'Muli-Light',
  },

  btnOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  btnTextOuter: {
    width: '46%',
  },
  commonBtn: {
    padding: 10,
    textAlign: 'center',
    borderRadius: 30,
    backgroundColor: '#4d4d4d',
    elevation: 5,
    shadowColor: '#000',
    color: '#c5c5c5',
    fontFamily: 'Poiret',
  },
  btnInfo: {
    backgroundColor: '#22A719',
    textAlign: 'center',
    padding: 10,
    borderRadius: 30,
    color: MyTheme.colors.white,
    elevation: 5,
    shadowColor: '#000',
    fontFamily: 'Poiret',
  },

  table: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
  },
  Tablehead: {
    color: MyTheme.colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Muli-SemiBold',
    width: '70%',
    borderColor: '#707070',
    padding: 5,
    paddingHorizontal: 10,
  },
  cost: {
    width: '30%',
    textAlign: 'right',
  },
});
export default QuoteDetail;
