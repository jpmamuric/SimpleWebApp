import { combineReducers } from 'redux';

import menu from './reducer_menu';
import isActive from './reducer_isActive';

const rootReducer = combineReducers({
  menu,
  isActive
});

export default rootReducer;
