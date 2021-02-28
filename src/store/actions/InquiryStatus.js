import {api_url} from '../../api/Api';
import axios from 'axios';

import {INQUIRYSTATUS} from '../actionType/ActionType';
export const InquiryStatus = () => {
  return async (dispatch, getState) => {
    try {
      const config = {
        headers: {Authorization: `Bearer ${getState().auth.token}`},
      };
      console.log(getState().auth.userId.id);
      const data = await axios.get(
        `${api_url}customer/inquiry/${getState().auth.userId.id}`,
        config,
      );

      if (!data.status) {
        throw new Error('Something went wrong!');
      }

      const resData = await data;
      console.log('resData', resData);
      console.log('AllOrder', resData);
      dispatch({
        type: INQUIRYSTATUS,
        kapil: 'ramSita',
        InquiryStatus: resData,
      });
    } catch (err) {
      throw err;
    }
  };
};
