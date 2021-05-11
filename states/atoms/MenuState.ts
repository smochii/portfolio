import { atom } from "recoil";
import { MENU_HOME } from '../../constant/constant';

const MenuState = atom<number>({
  key: 'MenuState',
  default: MENU_HOME
});

export default MenuState