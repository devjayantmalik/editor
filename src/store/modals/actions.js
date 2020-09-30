import constants from "./constants";
import { SET_VISIBLE_FALSE, SET_VISIBLE_TRUE } from "./types";

export const setModalState = (name, isVisible) => {
  if (Object.keys(constants).includes(name)) {
    const actionType = !!isVisible ? SET_VISIBLE_TRUE : SET_VISIBLE_FALSE;

    return { type: actionType, payload: name };
  }
};
