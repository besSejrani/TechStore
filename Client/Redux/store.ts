import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reduxMulti from "redux-multi";

import * as process from "process";


/**
|--------------------------------------------------
| EXPLANATION :
| 
| Only show the redux-devtools in developpement. 
|--------------------------------------------------
*/

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let composeEnhancers;

  if (process.env.NODE_ENV === "production") {
    composeEnhancers = null || compose;
  } else {
    composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  }


/**
|--------------------------------------------------
| EXPLANATION :
| 
| Passing the following data to the index.js file
| in the root
|--------------------------------------------------
*/
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxMulti, thunk))
);

export const persistor = persistStore(store);
