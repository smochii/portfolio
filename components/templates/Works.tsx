import React from 'react'
import styles from '../../styles/modules/Works.module.css'
import { useRecoilValue } from 'recoil'
import MenuState from '../../states/atoms/MenuState'
import { MENU_WORKS } from '../../constant/constant';
import Util from '../../util/Util';

const Works: React.FC = () => {
  const contents = Util.getContents();
  
  const menu = useRecoilValue(MenuState);

  return (
    <div className={styles.works + ' ' + (menu == MENU_WORKS ? styles.worksActive : '')}>
      <h2 className={styles.subTitle}>
        { contents.works.title }
      </h2>
      <div className={styles.content + ' ' + (menu == MENU_WORKS ? styles.contentActive : '')}>
        <h3 className={styles.section}>
          { contents.works.excuse }
        </h3>
        <p>
          { contents.works.text }
        </p>
      </div>
    </div>
  )
}

export default Works
