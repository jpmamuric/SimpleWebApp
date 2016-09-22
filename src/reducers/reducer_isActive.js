import { IS_ACTIVE } from '../actions/types';

export default (state = false , action) => {
  switch (action.type) {
    case IS_ACTIVE:
        return action.payload;
      break;
    default:
      return state;
  }
}
