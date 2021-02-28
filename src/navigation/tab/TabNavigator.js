/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyTheme from '../../constants/Theme';
import {
  HomeNavigator,
  ProfileNavigator,
  EnquiryNavigator,
  NotificationNavigator,
  MyInquriesNavigator,
} from '../stack/StackNavigator';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'enquiry') {
          iconName = focused ? 'home-variant-outline' : 'home-variant-outline';
        } else if (route.name === 'profile') {
          iconName = focused ? 'account-outline' : 'account-outline';
        } else if (route.name === 'notification') {
          iconName = focused ? 'bell-outline' : 'bell-outline';
        } else if (route.name === 'myInquries') {
          // iconName = focused ? 'source-merge' : 'source-merge';
          return focused ? (
            <Image
              source={require('../../assests/images/car.png')}
              resizeMode={'contain'}
              style={{height: 30, width: 35, tintColor: MyTheme.colors.primary}}
            />
          ) : (
            <Image
              source={require('../../assests/images/car.png')}
              resizeMode={'contain'}
              style={{height: 30, width: 35, tintColor: MyTheme.colors.white}}
            />
          );
        }
        return <Icon name={iconName} size={22} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: MyTheme.colors.primary,
      inactiveTintColor: MyTheme.colors.white,
      showLabel: false,
      style: {
        // borderTopWidth: 1,
        backgroundColor: '#2b2b2b',
        borderTopColor: '#00000020',
        textTransform: 'uppercase',
      },
      labelStyle: {textTransform: 'uppercase', fontSize: 10, paddingBottom: 3},
    }}>
    <Tab.Screen name="enquiry" component={EnquiryNavigator} />
    <Tab.Screen name="myInquries" component={MyInquriesNavigator} />
    <Tab.Screen name="profile" component={ProfileNavigator} />
    <Tab.Screen name="notification" component={NotificationNavigator} />
  </Tab.Navigator>
);
export default TabNavigator;
