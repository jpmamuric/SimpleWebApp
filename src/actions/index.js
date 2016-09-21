import { FETCH_MENU } from './types';

import menu from '../data/menu';

export function fetchMenu() {
  return {
    type: FETCH_MENU,
    payload: menu
  };
}
