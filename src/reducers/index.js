import { combineReducers } from 'redux';

import menu           from './reducer_menu';
import modalIsActive  from './reducer_modalIsActive';
import menuIsActive   from './reducer_menuIsActive';
import selectedItem   from './reducer_selectedItem';

const rootReducer = combineReducers({
  menu,
  modalIsActive,
  menuIsActive,
  selectedItem
});

export default rootReducer;
