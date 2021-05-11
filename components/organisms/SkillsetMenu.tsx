import React from 'react'
import styles from '../../styles/modules/Profile.module.css'
import { useSetRecoilState } from 'recoil';
import SkillChip from '../atoms/SkillChip'
import SkillsetMenuState from '../../states/atoms/SkillsetMenuState'
import { SKILLSET_BACKEND, SKILLSET_FRONTEND, SKILLSET_ENBEDDED, SKILLSET_OTHER } from '../../constant/constant';
import Util from '../../util/Util';

const SkillsetMenu: React.FC = () => {
  const contents = Util.getContents();
  
  const setSkillsetMenu = useSetRecoilState(SkillsetMenuState);

  const clickBackend: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setSkillsetMenu(SKILLSET_BACKEND);
  };

  const clickFrontend: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setSkillsetMenu(SKILLSET_FRONTEND);
  };

  const clickEnbedded: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setSkillsetMenu(SKILLSET_ENBEDDED);
  };

  const clickOther: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setSkillsetMenu(SKILLSET_OTHER);
  };

  const clickEventList = [clickBackend, clickFrontend, clickEnbedded, clickOther];

  const skillset: JSX.Element[] = contents.profile.skillset.map((item, i) => {
    const delay = Number(i) * 1.1;
    const duration = String(contents.profile.skillset.length + 0.5);
    return (
      <SkillChip key={i} onClick={clickEventList[i]} duration={`${duration}s`} delay={`${delay}s`} text={item.name} color={item.color}/>
    )
  })

  return (
    <div className={styles.skillset}>
      { skillset }
    </div>
  )
}

export default SkillsetMenu
