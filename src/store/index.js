import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import auth from "../store/reducers/Auth";
import BestQuotes from "../store/reducers/BestQuotes";
import GetServices from "../store/reducers/GetServices";
import GetSingleQuote from "../store/reducers/GetSingleQuote";
import InquiryStatus from "../store/reducers/InquiryStatus";
import MyInquiries from "../store/reducers/MyInquiries";
import PlaceaInquiryScreen from "../store/reducers/PlaceaInquiryScreen";
import QuoteRespond from "../store/reducers/QuoteRespond";
import Profile from "../store/reducers/Profile";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
const appReducers = combineReducers({
  auth: auth,
  BestQuotes: BestQuotes,
  QuoteRespond: QuoteRespond,
  PlaceaInquiryScreen: PlaceaInquiryScreen,
  MyInquiries: MyInquiries,
  InquiryStatus: InquiryStatus,
  GetSingleQuote: GetSingleQuote,
  GetServices: GetServices,
  Profile: Profile,
});
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = (state, action) => appReducers(state, action);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk, logger];

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
export default persistor;
