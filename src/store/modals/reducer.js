import { SET_VISIBLE_FALSE, SET_VISIBLE_TRUE } from "./types";
import constants from "./constants";

const INITIAL_STATE = {};

Object.keys(constants).forEach((key) => (INITIAL_STATE[key] = false));

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_VISIBLE_TRUE:
      return { ...state, [action.payload]: true };
    case SET_VISIBLE_FALSE:
      return { ...state, [action.payload]: false };
    default:
      return state;
  }
};
