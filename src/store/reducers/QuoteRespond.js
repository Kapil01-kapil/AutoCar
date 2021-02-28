import {QUOTERESPOND} from '../actionType/ActionType';
const initialState = {
  QuoteRespond: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case QUOTERESPOND:
      return {
        QuoteRespond: action.QuoteRespond,
      };

    default:
      return state;
  }
}
