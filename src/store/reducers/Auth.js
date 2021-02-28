import {AUTHENTICATE, EMAIL, LOGOUT} from '../actionType/ActionType';

const initialState = {
  token: null,
  userId: null,
  email: null,
  logout: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        userId: action.userId,
        token: action.token,
      };

    case EMAIL:
      return {
        email: action.email,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
  c;
};
