import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  search: searchReducer
});

export default rootReducers;