import {PROFILE} from '../actionType/ActionType';
const initialState = {
  Profile: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PROFILE:
      return {
        Profile: action.Profile,
      };

    default:
      return state;
  }
}
