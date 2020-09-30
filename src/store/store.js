import allReducers from "./reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export default () => {
  // TODO: Add initialState for our store, to persist data.
  const store = createStore(allReducers, applyMiddleware(thunk));

  return store;
};
