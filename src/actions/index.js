import { FETCH_MENU, IS_ACTIVE , SELECT_ITEM } from './types';

import menu from '../data/menu';

export function fetchMenu() {
  return {
    type: FETCH_MENU,
    payload: menu
  };
}

export function setState(isActive) {
  return {
    type: IS_ACTIVE,
    payload: isActive
  };
}

export function getItem(item) {
  return {
    type: SELECT_ITEM,
    payload: item
  };
}
