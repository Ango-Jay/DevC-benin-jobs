import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
// import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  // user: userReducer,
});
