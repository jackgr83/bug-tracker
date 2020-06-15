import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import bugReducer from "./bugReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  bugs: bugReducer,
});
