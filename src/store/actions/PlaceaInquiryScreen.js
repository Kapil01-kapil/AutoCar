import {api_url} from '../../api/Api';
import axios from 'axios';

import {PLACEINQUIRYSCREN} from '../actionType/ActionType';
export const PlaceaInquiryScreen = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${api_url}customer/sendinquiry`, body);
      console.log('jhdgfg', body, 'data', data);

      if (!data.status) {
        throw new Error('Something went wrong!');
      }

      const resData = await data;

      console.log('resData', resData);

      dispatch({
        type: PLACEINQUIRYSCREN,
        kapil: 'ramSita',
        PlaceaInquiryScreen: resData,
      });
    } catch (err) {
      throw err;
    }
  };
};
