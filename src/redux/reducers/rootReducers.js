import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import commonReducer from "./commonReducer";
import searchReducer from "./searchReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  search: searchReducer,
  cart: cartReducer,
  common: commonReducer,
});

export default rootReducers;
