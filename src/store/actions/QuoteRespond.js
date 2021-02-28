import {api_url} from '../../api/Api';
import axios from 'axios';

import {QUOTERESPOND} from '../actionType/ActionType';
export const QuoteRespond = () => {
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
        type: QUOTERESPOND,
        kapil: 'ramSita',
        QuoteRespond: resData,
      });
    } catch (err) {
      throw err;
    }
  };
};
