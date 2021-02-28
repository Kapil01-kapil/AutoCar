import {GETSERVICES} from '../actionType/ActionType';
const initialState = {
  GetServices: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GETSERVICES:
      return {
        GetServices: action.GetServices,
      };

    default:
      return state;
  }
}
