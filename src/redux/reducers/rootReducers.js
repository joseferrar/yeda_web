import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import searchReducer from "./searchReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  search: searchReducer,
  cart: cartReducer
});

export default rootReducers;