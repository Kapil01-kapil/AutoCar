import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tab/TabNavigator';
import {
  AuthNavigator,
  HomeNavigator,
  EnquiryNavigator,
  NotificationNavigator,
  MyInquriesNavigator,
  ProfileNavigator,
} from './stack/StackNavigator';

const Stack = createStackNavigator();

const NavigationLoader = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="auth">
        <Stack.Screen name="auth" component={AuthNavigator} />
        <Stack.Screen name="home" component={HomeNavigator} />
        <Stack.Screen name="tab" component={TabNavigator} />
        <Stack.Screen name="enquiry" component={EnquiryNavigator} />
        <Stack.Screen name="myInquries" component={MyInquriesNavigator} />
        <Stack.Screen name="profile" component={ProfileNavigator} />
        <Stack.Screen name="notification" component={NotificationNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationLoader;
