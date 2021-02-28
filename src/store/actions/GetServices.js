import {api_url} from '../../api/Api';
import axios from 'axios';
import {GETSERVICES} from '../actionType/ActionType';
export const GetServices = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get(
        `${api_url}customer/services?offset=0&limit=20`,
        body,
      );
      console.log('jhdgfg', body, 'data', data);

      if (!data.status) {
        throw new Error('Something went wrong!');
      }

      const resData = await data;

      console.log('resData', resData);
      console.log('AllOrder', resData);
      dispatch({
        type: GETSERVICES,
        kapil: 'ramSita',
        GetServices: resData,
      });
    } catch (err) {
      throw err;
    }
  };
};
