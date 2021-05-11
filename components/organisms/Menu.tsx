import React from 'react'
import styles from '../../styles/modules/Menu.module.css'
import FadeInAnimation from '../animations/FadeInAnimation'
import FloatAnimation from '../animations/FloatAnimation'
import MenuItem from '../atoms/MenuItem'
import { RiHomeSmileLine } from 'react-icons/ri'
import { MdFace, MdCode } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import MenuState from '../../states/atoms/MenuState'
import { MENU_HOME, MENU_PROFILE, MENU_WORKS } from '../../constant/constant';

const Menu: React.FC = () => {
  const [menu, setMenu] = useRecoilState(MenuState);

  const clickHome: React.MouseEventHandler<HTMLLIElement> = (event) => {
    setMenu(MENU_HOME);
  }

  const clickProfile: React.MouseEventHandler<HTMLLIElement> = (event) => {
    setMenu(MENU_PROFILE);
  }

  const clickWorks: React.MouseEventHandler<HTMLLIElement> = (event) => {
    setMenu(MENU_WORKS);
  }

  return (
    <React.Fragment>
      <ul className={styles.menu}>
        <FadeInAnimation duration='1s' delay='.8s'>
          <FloatAnimation duration='5s' delay='0s'>
            <MenuItem isActive={menu === MENU_HOME} onClick={clickHome}>
              <RiHomeSmileLine size={42} />
            </MenuItem>
          </FloatAnimation>
        </FadeInAnimation>
        <FadeInAnimation duration='1s' delay='1s'>
          <FloatAnimation duration='5s' delay='.4s'>
            <MenuItem isActive={menu === MENU_PROFILE} onClick={clickProfile}>
              <MdFace size={42} />
            </MenuItem>
          </FloatAnimation>
        </FadeInAnimation>
        <FadeInAnimation duration='1s' delay='1.2s'>
          <FloatAnimation duration='5s' delay='.8s'>
            <MenuItem isActive={menu === MENU_WORKS} onClick={clickWorks}>
              <MdCode size={42} />
            </MenuItem>
          </FloatAnimation>
        </FadeInAnimation>
      </ul>
    </React.Fragment>
  )
}

export default Menu
