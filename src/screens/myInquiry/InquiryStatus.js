import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import MyTheme from '../../constants/Theme';
import {SimpleHeader} from '../../components/Header';
import {FormButton} from '../../components/Button';
import {StatusCard, NotificationList} from '../../components/Card';
import {useSelector, useDispatch} from 'react-redux';
import * as InquiryStatu from '../../store/actions/InquiryStatus';
const InquiryStatus = (props) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.InquiryStatus.InquiryStatus,
  );
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(InquiryStatu.InquiryStatus());
      console.log('name', notifications);
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);
  useEffect(() => {
    console.log('kapil', notifications);
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

  const notificationList = [
    {
      id: 'fafa',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    },
    {
      id: 'sdfgsdg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#48494E', alignItems: 'center'}}>
      <SimpleHeader title="Inquiry Status" {...props} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={[styles.row, {justifyContent: 'center', marginBottom: 15}]}>
            <Image
              style={styles.star}
              source={require('../../assests/images/star.png')}
            />
            <Text style={styles.title}> {'NA'}</Text>
          </View>
          <View style={[styles.row, styles.btnOuter]}>
            <TouchableOpacity style={{width: '48%'}}>
              <Text style={styles.callBtn}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '48%'}}>
              <Text style={styles.supportBtn}>Support</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.notificationOuter}>
            <Text style={styles.heading}>Notification from star workshop</Text>

            <View style={styles.listOuter}>
              {/* <NotificationList /> */}
              <FlatList
                onRefresh={loadProducts}
                refreshing={isRefreshing}
                data={notificationList}
                renderItem={({item, index}) => (
                  <NotificationList
                    data={item}
                    {...props}
                    cStyle={{
                      borderColor:
                        index % 2 == 0
                          ? MyTheme.colors.primary
                          : MyTheme.colors.primaryDark,
                    }}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>

          <FormButton
            title="Make a Payment"
            CTextStyle={{
              backgroundColor: MyTheme.colors.primary,
              fontSize: 18,
            }}
            onPress={() => navigation.navigate('myCards')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '8%',
    paddingVertical: 20,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    color: MyTheme.colors.white,
    fontFamily: 'Poiret',
  },
  btnOuter: {
    margin: 15,
    justifyContent: 'space-between',
  },
  callBtn: {
    padding: 8,
    borderRadius: 7,
    backgroundColor: '#19A21D',
    textAlign: 'center',
    color: MyTheme.colors.white,
    elevation: 5,
    shadowColor: '#000',
  },
  supportBtn: {
    padding: 8,
    borderRadius: 7,
    backgroundColor: MyTheme.colors.primary,
    textAlign: 'center',
    color: MyTheme.colors.white,
    elevation: 5,
    shadowColor: '#000',
  },
  notificationOuter: {
    paddingVertical: 20,
  },
  heading: {
    fontSize: 18,
    color: MyTheme.colors.white,
    fontFamily: 'Poiret',
    marginBottom: 20,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default InquiryStatus;
