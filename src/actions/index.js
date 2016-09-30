import {
  FETCH_MENU,
  MODAL_IS_ACTIVE,
  SELECT_ITEM,
  MENU_IS_ACTIVE 
} from './types';

import menu from '../data/menu';

export function fetchMenu() {
  return {
    type: FETCH_MENU,
    payload: menu
  };
}

export function setModalState(isActive) {
  return {
    type: MODAL_IS_ACTIVE,
    payload: isActive
  };
}

export function setMenuState(isActive) {
  return {
    type: MENU_IS_ACTIVE,
    payload: isActive
  };
}

export function getItem(item) {
  return {
    type: SELECT_ITEM,
    payload: item
  };
}
