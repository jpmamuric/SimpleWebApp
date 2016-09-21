import { FETCH_MENU } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MENU:
        return action.payload;
      break;
    default:
      return state
  }
}
