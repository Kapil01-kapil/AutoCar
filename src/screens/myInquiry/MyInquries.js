/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import MyTheme from '../../constants/Theme';
import {SimpleHeader} from '../../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Past from './Past';
import Current from './Current';
import Upcoming from './Upcoming';
const {width, height} = Dimensions.get('window');
import {useSelector, useDispatch} from 'react-redux';
import * as MyInquriesss from '../../store/actions/MyInquiries';
const initialLayout = width * 0.85;
const MyInquries = (props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const [title, setTitle] = useState('Online');
  const [index, setIndex] = useState(0);
  const [currentlist, setCurrentlist] = useState([]);
  const [pastlist, setPastlist] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [routes] = useState([
    {key: 'current', title: 'Current'},
    {key: 'past', title: 'Past'},
    {key: 'upcoming', title: 'Upcoming'},
  ]);

  const MyInqurie = useSelector((state) => state.MyInquiries.MyInquiries);
  const dispatch = useDispatch();
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(MyInquriesss.MyInquiries());
      console.log('name', MyInqurie);
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);
  useEffect(() => {
    console.log('name', MyInqurie);
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'current':
        return <Current {...props} list={currentlist} />;
      case 'past':
        return <Past {...props} list={pastlist} />;
      case 'upcoming':
        return <Upcoming {...props} list={upcomingList} />;
    }
  };
  useEffect(() => {
    onGetInqueries('current', 3);
  }, []);

  const onGetInqueries = () => {
    if (MyInqurie.searchFilter == 'current') {
      setCurrentlist(response.data);
    } else if (MyInqurie.searchFilter == 'past') {
      setPastlist(response.data);
    } else if (MyInqurie.searchFilter == 'upcoming') {
      setUpcomingList(response.data);
    }
  };
  const renderTitle = (key) => {
    setIndex(key);
    switch (key) {
      case 0:
        onGetInqueries('current', currentlist.length + 3);
        setActiveTab(0);
        return setTitle('My Inquries');
      case 1:
        onGetInqueries('past', pastlist.length + 3);
        setActiveTab(1);
        return setTitle('My Inquries');
      case 2:
        onGetInqueries('upcoming', upcomingList.length + 3);
        setActiveTab(2);
        return setTitle('My Inquries');
    }
  };
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  const renderTabBar = (props) => (
    <ScrollView
      horizontal
      style={{flexGrow: 0, width: '100%', margin: 0}}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}>
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: MyTheme.colors.primary}}
        style={{
          backgroundColor: '#4d4d4d',
          width: width * 0.85,
          padding: 0,
          margin: 0,
          borderRadius: 5,
          marginBottom: 10,
        }}
        inactiveColor="#fff"
        activeColor={MyTheme.colors.primary}
        tabStyle={{padding: 0}}
        labelStyle={{
          textTransform: 'capitalize',
          fontWeight: '500',
          fontFamily: 'Muli',
          padding: 0,
          margin: 0,
          fontSize: 12,
          paddingVertical: 0,
        }}
      />
    </ScrollView>
  );

  return (
    // <Maps />
    <View style={{flex: 1, backgroundColor: '#48494E', alignItems: 'center'}}>
      <SimpleHeader title={'My Inquries'} {...props} />
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            renderTitle(activeTab);
          }
        }}
        scrollEventThrottle={400}
        style={{backgroundColor: '#48494E', flex: 1}}>
        <View style={styles.container}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={renderTitle}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            swipeEnabled={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('85%'),
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default MyInquries;
