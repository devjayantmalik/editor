import { combineReducers } from "redux";
import modalsReducer from "./modals/reducer";

export default combineReducers({
  modals: modalsReducer,
});
