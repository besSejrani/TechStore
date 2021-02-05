import { combineReducers } from "redux";
import productReducer from "../reducers/productReducer";

export default combineReducers({
  product: productReducer
});
