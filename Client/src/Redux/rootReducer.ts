import { combineReducers } from "redux";
import productReducer from "./product/productReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "raspberry",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  product: productReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
