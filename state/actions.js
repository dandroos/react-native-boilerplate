import { SET_COUNT, SET_SHOW_MENU } from "./types";

export const setCount = (payload) => ({
  type: SET_COUNT,
  payload,
});

export const setShowMenu = (payload) => ({
  type: SET_SHOW_MENU,
  payload,
});
