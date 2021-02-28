import {api_url} from '../../api/Api';
import axios from 'axios';
import {
  MYINQUIRIES,
  INQUIRIES,
  INQUIRYSTATUS,
  INQUIRYST,
} from '../actionType/ActionType';
export const Inquiries = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${api_url}customer/sendinquiry`, body);
      console.log('jhdgfg', body, 'data', data);

      if (!data.status) {
        throw new Error('Something went wrong!');
      }

      const resData = await data;

      const loadedProducts = [];

      console.log('resData', resData);
      console.log('AllOrder', resData);
      dispatch({
        type: INQUIRIES,
        kapil: 'ramSita',
        Inquiries: resData,

        // userProducts: loadedProducts.filter((prod) => prod.id === body),
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const MyInquiries = () => {
  return async (dispatch, getState) => {
    // any async code you want!
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    console.log('config kapil', config);
    try {
      const data = await axios.get(
        `${api_url}customer/myinquiries?filter=upcoming&offset=0&limit=10`,
        config,
      );
      console.log('data', data);

      if (!data.status) {
        throw new Error('Something went wrong!');
      }

      const resData = await data.data.data;

      const loadedProducts = [];

      console.log('resData', resData);
      console.log('AllOrder', resData);
      dispatch({
        type: MYINQUIRIES,
        kapil: 'ramSita',
        MyInquiries: resData,

        // userProducts: loadedProducts.filter((prod) => prod.id === body),
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const InquiryStatus = () => {
  return async (dispatch, getState) => {
    // any async code you want!
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    console.log('config kapil', getState().auth.userId.id);
    try {
      const data = await axios.get(
        `${api_url}customer/inquiry/${getState().auth.userId.id}`,
        config,
      );
      console.log('data', data);

      if (!data.status) {
        throw new Error('Something went wrong!');
      }

      const resData = await data.data.data;

      const loadedProducts = [];

      console.log('resData', resData);
      console.log('AllOrder', resData);
      dispatch({
        type: INQUIRYSTATUS,
        kapil: 'ramSita',
        InquiryStatus: resData,

        // userProducts: loadedProducts.filter((prod) => prod.id === body),
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const InquirySt = () => {
  return async (dispatch, getState) => {
    // any async code you want!
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    console.log('config kapil', getState().auth.userId.id);
    try {
      const data = await axios.get(
        `${api_url}customer/inquiry/${getState().auth.userId.id}`,
        config,
      );
      console.log('data', data);

      if (!data.status) {
        throw new Error('Something went wrong!');
      }

      const resData = await data.data.data;

      const loadedProducts = [];

      console.log('resData', resData);
      console.log('AllOrder', resData);
      dispatch({
        type: INQUIRYST,
        kapil: 'ramSita',
        InquiryStatus: resData,

        // userProducts: loadedProducts.filter((prod) => prod.id === body),
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};
