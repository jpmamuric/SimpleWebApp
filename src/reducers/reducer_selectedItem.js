import { SELECT_ITEM } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_ITEM:
        return Object.assign({}, state, action.payload);
      break;
    default:
      return state;
  }
}
