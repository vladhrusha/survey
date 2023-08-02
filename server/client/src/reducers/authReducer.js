import { FETCH_USER } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      if (Object.keys(action.payload).length === 0) return false;
      return action.payload;
    default:
      return state;
  }
};
