import {MYINQUIRIES, INQUIRYSTATUS} from '../actionType/ActionType';
const initialState = {
  PlaceaInquiryScreen: [],
  MyInquiries: [],
  InquiryStatus: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MYINQUIRIES:
      return {
        MyInquiries: action.MyInquiries,
      };
    case INQUIRYSTATUS:
      return {
        InquiryStatus: action.InquiryStatus,
      };

    default:
      return state;
  }
}
