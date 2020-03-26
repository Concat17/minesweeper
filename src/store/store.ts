import { createStore, compose } from "redux";
import rootReducer from "../reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const configureStore = preloadedState =>
//   createStore(
//     rootReducer,
//     preloadedState,

//   );

const store = createStore(rootReducer, composeEnhancers());

// const store = configureStore({});

export default store;
