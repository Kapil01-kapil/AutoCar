/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Register,
  Verification,
  Terms,
  ForgotPassword,
  LoginPhoneVerification,
  LoginVerification,
  ResetPassword,
  PhoneVerification,
  forgotPasswordEmail,
} from "../../screens/auth";
import Splash from "../../screens/Spalsh";
import { Home } from "../../screens/home";
import {
  Profile,
  EditProfile,
  Settings,
  TermsConditions,
  PrivacyPolicy,
  MyCars,
  AddCar,
} from "../../screens/profile";
import { Notification } from "../../screens/nofitication";
import {
  PlaceEnquiry,
  BestQuotes,
  QuoteDetail,
  Fullimage,
} from "../../screens/enquiry";
import {
  MyInquries,
  InquiryStatus,
  MyCards,
  AddCard,
  OnlinePayment,
} from "../../screens/myInquiry";

const Stack = createStackNavigator();

// Stack Nativgator with no header and bottom tabs instead can be with custom header

export const AuthNavigator = (props) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginPhoneVerification"
      component={LoginPhoneVerification}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginVerification"
      component={LoginVerification}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="forgotPasswordEmail"
      component={forgotPasswordEmail}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="register"
      component={Register}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="verification"
      component={Verification}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="phoneVerification"
      component={PhoneVerification}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="forgot"
      component={ForgotPassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="reset"
      component={ResetPassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="terms"
      component={Terms}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const HomeNavigator = (props) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="home"
      component={Home}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export const EnquiryNavigator = (props) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="enquiry"
      component={PlaceEnquiry}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="bestQuotes"
      component={BestQuotes}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="quoteDetail"
      component={QuoteDetail}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="fullimage"
      component={Fullimage}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export const NotificationNavigator = (props) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="notification"
      component={Notification}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export const MyInquriesNavigator = (props) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="myInquries"
      component={MyInquries}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="inquiryStatus"
      component={InquiryStatus}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="myCards"
      component={MyCards}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="onlinePayment"
      component={OnlinePayment}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="addCard"
      component={AddCard}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const ProfileNavigator = (props) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="profile"
      component={Profile}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="settings"
      component={Settings}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="termsConditions"
      component={TermsConditions}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="privacyPolicy"
      component={PrivacyPolicy}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="myCars"
      component={MyCars}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="addCar"
      component={AddCar}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="editProfile"
      component={EditProfile}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
