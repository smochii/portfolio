import React from 'react'
import { SKILLSET_BACKEND, SKILLSET_ENBEDDED, SKILLSET_FRONTEND, SKILLSET_OTHER, MENU_PROFILE } from '../../constant/constant';
import styles from '../../styles/modules/Profile.module.css'
import { useRecoilValue } from 'recoil'
import MenuState from '../../states/atoms/MenuState'
import BackendModal from '../molecules/BackendModal'
import SkillsetMenu from '../organisms/SkillsetMenu'
import FrontendModal from '../molecules/FrontendModal'
import EnbeddedModal from '../molecules/EnbeddedModal'
import OtherModal from '../molecules/OtherModal'
import Util from '../../util/Util';

const Profile: React.FC = () => {
  const contents = Util.getContents();
  const menu = useRecoilValue(MenuState);

  return (
    <React.Fragment>
      <div className={styles.profile + ' ' + (menu == MENU_PROFILE ? styles.profileActive : '')}>
        <h2 className={styles.subTitle}>{contents.profile.title}</h2>
        <div className={styles.content + ' ' + (menu == MENU_PROFILE ? styles.contentActive : '')}>
          <h3 className={styles.section}>
            { contents.profile.aboutMe }
          </h3>
          <p>
            { contents.profile.aboutMe_text }
          </p>
          <h3 className={styles.section}>
            { contents.profile.mySkillset }
          </h3>
          <SkillsetMenu/>
        </div>
      </div>
      <BackendModal color={contents.profile.skillset[SKILLSET_BACKEND].color}/>
      <FrontendModal color={contents.profile.skillset[SKILLSET_FRONTEND].color}/>
      <EnbeddedModal color={contents.profile.skillset[SKILLSET_ENBEDDED].color}/>
      <OtherModal color={contents.profile.skillset[SKILLSET_OTHER].color}/>
    </React.Fragment>
  )
}

export default Profile
