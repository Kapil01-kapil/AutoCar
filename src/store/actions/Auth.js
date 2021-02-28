import React, {useState, useEffect, useReducer, useCallback} from 'react';
import axios from 'axios';
import {api_url, fcm_token} from '../../api/Api';
import {
  FETCH_DATA,
  AUTHENTICATE,
  RESISTATION,
  EMAIL,
  LOGOUT,
} from '../actionType/ActionType';
export const authenticate = (userId, token) => {
  return {type: AUTHENTICATE, userId: userId, token: token};
};
export const authention = (data) => {
  return {type: RESISTATION, data: data};
};
export const login = (email, password) => {
  let body = {
    email: email,
    password: password,
    fcm_token: fcm_token,
  };
  return async (dispatch) => {
    const {data} = await axios.post(`${api_url}auth/customer/login`, body);
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }
    console.log('resData', data);
    dispatch(authenticate(data.user, data.token, data.data));
  };
};
export const Logout = (data) => {
  return (dispatch) => {
    dispatch({type: LOGOUT});
  };
};
export const Register = (
  name,
  email,
  phone,
  password,
  password_confirmation,
  country,
) => {
  let body = {
    name: name,
    email: email,
    phone: phone,
    password: password,
    password_confirmation: password_confirmation,
    country: 'india',
  };
  console.log(body);
  return async (dispatch) => {
    const {data} = await axios.post(`${api_url}auth/customer/signup`, body);
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }
    console.log('resData', data.data);
    dispatch(authenticate(data.data, data.token, data.data));
  };
};

export const PhoneVerification = (userid, otp) => {
  let body = {
    userid: userid,
    otp: otp,
  };
  console.log(body);
  return async (dispatch) => {
    const {data} = await axios.post(`${api_url}auth/customer/verifyOTP`, body);
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';

      throw new Error(message);
    }
    console.log('resData', data.data);
  };
};
export const Verification = (userid, phone) => {
  let body = {
    userid: userid,
    phone: phone,
  };
  console.log(body);
  return async (dispatch) => {
    const {data} = await axios.post(`${api_url}auth/customer/resend`, body);
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';

      throw new Error(message);
    }
    console.log('resData', data.data);
  };
};

export const resetEmail = (email) => {
  let body = {
    email: email,
  };
  console.log(body);
  return async (dispatch) => {
    const {data} = await axios.post(`${api_url}auth/customer/password`, body);
    console.log('resData', data);
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';

      throw new Error(message);
    }
    console.log('resData', data.data);
    dispatch(authenticate(data));
  };
};

export const resetOtp = (otp, id) => {
  let body = {
    otp: otp,
    id: id,
  };
  console.log(body);
  return async (dispatch) => {
    const {data} = await axios.post(
      `${api_url}auth/customer/validate-password-reset`,
      body,
    );
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';

      throw new Error(message);
    }
    console.log('resData', data);
    dispatch({type: EMAIL, email: data.email});
  };
};

export const resetPassword = (password, password_confirmation, email) => {
  let body = {
    password: password,
    password_confirmation: password_confirmation,
    email: email,
    token: '6981',
  };
  console.log(body);
  return async (dispatch) => {
    const {data} = await axios.post(`${api_url}auth/customer/reset`, body);
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';

      throw new Error(message);
    }
    console.log('resData', data);
  };
};
