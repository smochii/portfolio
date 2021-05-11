import { useRecoilValue } from 'recoil';
import SkillsetMenuState from '../../states/atoms/SkillsetMenuState';
import styles from '../../styles/modules/SkillsetModal.module.css'
import CloseSkillsetModalButton from '../atoms/CloseSkillsetModalButton';
import React from 'react';
import ChildSkillChip from '../atoms/ChildSkillChip';
import { SKILLSET_ENBEDDED } from '../../constant/constant';
import Util from '../../util/Util';

type Props = {
  color: string;
}

const EnbeddedModal: React.FC<Props> = (props) => {
  const contents = Util.getContents();
  
  const color: React.CSSProperties = {
    backgroundColor: props.color
  }

  const skillsetMenu = useRecoilValue(SkillsetMenuState);

  const haveUsed: JSX.Element[] = contents.profile.skillset[SKILLSET_ENBEDDED].child.haveUsed.map((text, i) => {
    return (
      <ChildSkillChip key={i} text={text} color={contents.profile.skillset[SKILLSET_ENBEDDED].color}/>
    )
  })

  const selfStudy: JSX.Element[] = contents.profile.skillset[SKILLSET_ENBEDDED].child.selfStudy.map((text, i) => {
    return (
      <ChildSkillChip key={i} text={text} color={contents.profile.skillset[SKILLSET_ENBEDDED].color}/>
    )
  })

  return (
    <div style={color} className={styles.skillsetModal + ' ' + (skillsetMenu == SKILLSET_ENBEDDED ? styles.skillsetModalActive : '')}>
      <CloseSkillsetModalButton/>
      <h2 className={styles.subTitle}>
      { contents.profile.enbeddedSkills }
      </h2>
      <div className={styles.content + ' ' + (skillsetMenu == SKILLSET_ENBEDDED ? styles.contentActive : '')}>
        <h3 className={styles.section}>
          { contents.profile.haveUsedKeyword }
        </h3>
        <div className={styles.skillset}>
          { haveUsed }
        </div>
        <h3 className={styles.section}>
          { contents.profile.selfStudyKeyword }
        </h3>
        <div className={styles.skillset}>
          { selfStudy }
        </div>
      </div>
    </div>
  )
}

export default EnbeddedModal