import { FETCH_MENU, IS_ACTIVE } from './types';

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
