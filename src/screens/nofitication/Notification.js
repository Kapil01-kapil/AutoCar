import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MyTheme from '../../constants/Theme';
import {NotificationCard} from '../../components/Card';
import moment from 'moment';
import {SimpleHeader} from '../../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import * as BestQuote from '../../store/actions/BestQuotes';
const Notification = (props) => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.BestQuotes.Notification);
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(BestQuote.Notification());
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

  const data = [
    {
      id: 'sadfas',
      title: 'You have a new notification',
      time: '',
      // onPress: '',
    },
    {
      id: 'dsfgsg',
      title: 'You have a new notification',
      time: '',
      // onPress: '',
    },
    {
      id: 'dsfgsg',
      title: 'You have a new notification',
      time: '',
      // onPress: '',
    },
  ];
  const notificationNo = data && data.length;

  const notificationList =
    notifications &&
    notifications.map((item, index) => {
      return (
        <NotificationCard
          key={'accountNotify-' + index}
          title={item.title}
          description={item.description}
          time={moment(item.time).format('LLL')}
          isImage={item.isImage}
        />
      );
    });

  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <SimpleHeader {...props} title="Notifications" />
      <ScrollView style={{flex: 1, paddingVertical: 20, padding: 10}}>
        {/* <View style={styles.outer}>
          <Text style={styles.text}>{notificationNo} New Notification(s)</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.clearBtn}>Clear</Text>
          </TouchableOpacity>
        </View> */}
        {notificationList}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    backgroundColor: MyTheme.colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#1A1818',
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
  clearBtn: {
    fontSize: 10,
    color: MyTheme.colors.yellow,
    fontFamily: 'MontserratBold',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default Notification;
