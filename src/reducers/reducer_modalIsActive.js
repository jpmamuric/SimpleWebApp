import { MODAL_IS_ACTIVE } from '../actions/types';

export default (state = false , action) => {
  switch (action.type) {
    case MODAL_IS_ACTIVE:
        return action.payload;
      break;
    default:
      return state;
  }
}
