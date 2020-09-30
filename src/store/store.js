import allReducers from "./reducers";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

export default () => {
  // TODO: Add initialState for our store, to persist data.

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
