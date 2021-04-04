import { SET_COUNT, SET_SHOW_MENU } from "./types";

const initialState = {
  count: null,
  showMenu: false,
};

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state);

  switch (type) {
    case SET_COUNT:
      newState.count = payload;
      break;
    case SET_SHOW_MENU:
      newState.showMenu = payload;
      break;
    default:
      break;
  }

  return newState;
};
