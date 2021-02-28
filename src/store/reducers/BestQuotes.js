import {
  BESTQUOTES,
  QUOTEDETAIL,
  NOTIFICATION,
  ADDCARD,
  GETCARS,
  GETCAR,
  GETCARDS,
  PLACEAINQUIRYSCREEN,
} from '../actionType/ActionType';
const initialState = {
  BestQuotes: [],
  QuoteDetail: [],
  Notification: [],
  Add_card: [],
  get_cars: [],
  getcar: [],
  get_cards: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BESTQUOTES:
      return {
        BestQuotes: action.BestQuotes,
      };
    case QUOTEDETAIL:
      return {
        QuoteDetail: action.QuoteDetail,
      };
    case GETCARDS:
      return {
        get_cards: action.get_cards,
      };
    case NOTIFICATION:
      return {
        Notification: action.Notification,
      };
    case ADDCARD:
      return {
        Add_card: action.addCard,
      };
    case GETCARS:
      return {
        get_cars: action.get_cars,
      };
    case GETCAR:
      return {
        getcar: action.getcar,
      };
    case PLACEAINQUIRYSCREEN:
      return {
        Place_a_Inquiry_Screen: action.Place_a_Inquiry_Screen,
      };
    default:
      return state;
  }
}
