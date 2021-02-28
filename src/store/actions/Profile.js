import {api_url} from '../../api/Api';
import axios from 'axios';

import {PROFILE} from '../actionType/ActionType';

export const Profile = () => {
  return async (dispatch, getState) => {
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    console.log('config====>', config);
    try {
      const data = await axios.get(`${api_url}customer/profile`, config);
      console.log('data', data.data.data);

      if (!data.status) {
        throw new Error('Something went wrong!');
      }

      const resData = await data.data.data;

      const loadedProducts = [];

      console.log('resData', resData);

      dispatch({
        type: PROFILE,
        kapil: 'ramSita',
        Profile: resData,
      });
    } catch (err) {
      throw err;
    }
  };
};
