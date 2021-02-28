import {PLACEINQUIRYSCREN} from '../actionType/ActionType';
const initialState = {
  PlaceaInquiryScreen: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PLACEINQUIRYSCREN:
      return {
        PlaceaInquiryScreen: action.PlaceaInquiryScreen,
      };

    default:
      return state;
  }
}
