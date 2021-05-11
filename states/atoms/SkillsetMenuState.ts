import { atom } from "recoil";

const SkillsetMenuState = atom<number>({
  key: 'SkillsetMenuState',
  default: null
});

export default SkillsetMenuState