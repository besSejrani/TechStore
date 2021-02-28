//Redux
import { combineReducers } from "redux";

// Reducers
import productReducer from "./product/productReducer";
import uiReducer from "./ui/uiReducer";

// Storage
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ========================================================================================================

const persistConfig = {
  key: "raspberry",
  storage,
  whitelist: ["ui"],
};

const rootReducer = combineReducers({
  product: productReducer,
  ui: uiReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
