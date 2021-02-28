import {GETSINGLEQUOTE} from '../actionType/ActionType';
const initialState = {
  GetSingleQuote: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GETSINGLEQUOTE:
      return {
        GetSingleQuote: action.GetSingleQuote,
      };

    default:
      return state;
  }
}
