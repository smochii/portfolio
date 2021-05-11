import en from '../contents/en'
import ja from '../contents/ja'
import { LANGUAGE_EN } from '../constant/constant';
import { useRecoilValue } from 'recoil';
import LanguageState from '../states/atoms/LanguageState';

const Util = {
  getContents: () => {
    const lang = useRecoilValue(LanguageState);
    return lang == LANGUAGE_EN ? en : ja
  }
}

export default Util