import { atom } from "recoil";
import { LANGUAGE_EN } from '../../constant/constant';

const LanguageState = atom<number>({
  key: 'LanguageState',
  default: LANGUAGE_EN
});

export default LanguageState