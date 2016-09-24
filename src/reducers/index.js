import { combineReducers } from 'redux';

import menu         from './reducer_menu';
import isActive     from './reducer_isActive';
import selectedItem from './reducer_selectedItem';

const rootReducer = combineReducers({
  menu,
  isActive,
  selectedItem
});

export default rootReducer;
