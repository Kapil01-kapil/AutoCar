import {INQUIRYSTATUS} from '../actionType/ActionType';
const initialState = {
  InquiryStatus: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INQUIRYSTATUS:
      return {
        InquiryStatus: action.InquiryStatus,
      };

    default:
      return state;
  }
}
