import {api_url} from '../../api/Api';
import axios from 'axios';
import {
  PLACEAINQUIRYSCREEN,
  DELETE_CARD,
  GETSINGLECARD,
  GETCAR,
  GETCARDS,
  GETCARS,
  NOTIFICATION,
  ADDCAR,
  ADDCARD,
  UPDATE_PRODUCT,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  QUOTEDETAIL,
  BESTQUOTES,
} from '../actionType/ActionType';
export const BestQuotes = () => {
  return async (dispatch, getState) => {
    // any async code you want!

    try {
      const config = {
        headers: {Authorization: `Bearer ${getState().auth.token}`},
      };
      console.log('config', config);
      const data = await axios.get(
        `${api_url}customer/bestquotes?limit=2&offset=0`,

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
        type: BESTQUOTES,
        kapil: 'ramSita',
        BestQuotes: resData,

        // userProducts: loadedProducts.filter((prod) => prod.id === body),
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};
export const Place_a_Inquiry_Screen = (
  manufacturer,
  model,
  expected_close_date,
  comments,
) => {
  let body = {
    manufacturer: manufacturer,
    model: model,
    service_id: 13,
    expected_close_date: expected_close_date,
    comments: comments,
    lat: 30.839618,
    lng: 76.9544242,
    car_number: 32412432314,
  };
  console.log('body', body);
  return async (dispatch, getState) => {
    // any async code you want!

    try {
      const config = {
        headers: {Authorization: `Bearer ${getState().auth.token}`},
      };
      console.log('config', config);
      const data = await axios.post(
        `${api_url}customer/sendinquiry`,
        body,
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
        type: PLACEAINQUIRYSCREEN,
        kapil: 'ramSita',
        Place_a_Inquiry_Screen: resData,

        // userProducts: loadedProducts.filter((prod) => prod.id === body),
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const QuoteDetails = (id) => {
  let body = {
    id: id,
  };
  console.log(body);
  return async (dispatch, getState) => {
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };

    console.log('config', config);
    const {data} = await axios.post(
      `${api_url}customer/card/ ${body}`,

      config,
    );
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';
      throw new Error(message);
    }
    const resData = await data;
    console.log('resData', data);
    dispatch({
      type: QUOTEDETAIL,
      kapil: 'ramSita',
      QuoteDetail: resData,

      // userProducts: loadedProducts.filter((prod) => prod.id === body),
    });
  };
};

export const QuoteDetail = (workshopID, id, status) => {
  let body = {
    workshopID: workshopID,
    id: id,
    status: status,
  };
  console.log(body);
  return async (dispatch, getState) => {
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    console.log('config', config);
    const data = await axios.post(
      `${api_url}customer/respond-quote`,
      body,
      config,
    );
    if (!data.status) {
      const errorId = data.error.message;
      let message = 'Something went wrong!';

      throw new Error(message);
    }
    const resData = await data;
    console.log('resData', data.data);
    dispatch({
      type: QUOTEDETAIL,
      kapil: 'ramSita',
      QuoteDetail: resData,

      // userProducts: loadedProducts.filter((prod) => prod.id === body),
    });
  };
};

export const deleteProduct = (id) => {
  let body = {
    id: id,
  };
  console.log(body);

  return async (dispatch, getState) => {
    var config = {
      method: 'delete',
      url: `${api_url}customer/deletecar/2`,
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getState().auth.token}`,
      },
      data: body,
    };

    console.log('config', config, body);
    const response = await axios(config);
    console.log('response', response);
    if (!response.status) {
      throw new Error('Something went wrong!');
    }
    console.log(response);

    dispatch({type: DELETE_PRODUCT, pid: response});
  };
};

export const Add_car = (
  registration_number,
  user_id,
  vin_number,
  engine_number,
  model,
) => {
  let body = {
    registration_number: registration_number,
    user_id: user_id,
    vin_number: vin_number,
    engine_number: engine_number,
    model: model,
  };
  console.log('body==>', body);
  return async (dispatch, getState) => {
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    console.log('config', config);
    const response = await axios.post(
      `${api_url}customer/add-car`,
      body,
      config,
    );

    if (!response.status) {
      throw new Error('Something went wrong!');
    }
    console.log(response.data);
  };
};

export const Notification = () => {
  return async (dispatch, getState) => {
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    const response = await axios.get(
      `${api_url}customer/notifications`,
      config,
    );

    if (!response.status) {
      throw new Error('Something went wrong!');
    }
    console.log(response.data.data);
    dispatch({type: NOTIFICATION, Notification: response.data.data});
  };
};
export const Add_card = (card_brand, expiry_date, card_number) => {
  let body = {
    card_brand: card_brand,
    expiry_date: expiry_date,
    card_number: card_number,
    card_type: 'credit',
  };
  console.log('body', body);
  return async (dispatch, getState) => {
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    console.log('config', config);
    const response = await axios.post(
      `${api_url}customer/addcard`,
      body,
      config,
    );

    if (!response.status) {
      throw new Error('Something went wrong!');
    }
    console.log(response);
    dispatch({type: ADDCARD, addCard: response.data});
  };
};

export const get_cars = (offset, limit, id) => {
  let body = {
    offset: offset,
    limit: limit,
    id: id,
  };
  return async (dispatch, getState) => {
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    const response = await axios.get(
      `${api_url}customer/cars?offset=0&limit=2&id=1`,
      config,
    );
    console.log('response======>', response.data.data);
    if (!response.status) {
      throw new Error('Something went wrong!');
    }
    const resData = await response.data.data;
    console.log(response);
    dispatch({type: GETCARS, get_cars: response.data.data});
  };
};

export const get_car = () => {
  return async (dispatch, getState) => {
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    const response = await axios.get(`${api_url}customer/car/2`, config);
    console.log('response======>', response);
    if (!response.status) {
      throw new Error('Something went wrong!');
    }

    const resData = await data;
    console.log(response);
    dispatch({type: GETCAR, getcar: resData});
  };
};

export const get_cards = () => {
  return async (dispatch, getState) => {
    const config = {
      headers: {Authorization: `Bearer ${getState().auth.token}`},
    };
    const response = await axios.get(`${api_url}customer/cards`, config);

    if (!response.status) {
      throw new Error('Something went wrong!');
    }
    console.log(response.data.data);
    dispatch({type: GETCARDS, get_cards: response.data.data});
  };
};

export const get_Single_Card = () => {
  return async (dispatch) => {
    const response = await axios.get(`${api_url}customer/card/1`);

    if (!response.status) {
      throw new Error('Something went wrong!');
    }
    console.log(response.data);
    dispatch({type: GETSINGLECARD, pid: response.data});
  };
};

export const delete_Card = (
  card_brand,
  card_number,
  expiry_date,
  card_type,
  id,
) => {
  let body = {
    card_brand: card_brand,
    card_number: card_number,
    expiry_date: expiry_date,
    card_type: card_type,
    id: id,
  };
  console.log(body);

  return async (dispatch, getState) => {
    var config = {
      method: 'delete',
      url: `${api_url}customer/deletecard/1`,
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getState().auth.token}`,
      },
      data: body,
    };

    console.log('config', config, body);
    const response = await axios(config, body);
    console.log('response', response);
    if (!response.status) {
      throw new Error('Something went wrong!');
    }
    console.log(response);

    dispatch({type: DELETE_CARD, pid: response});
  };
};
