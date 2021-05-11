import React from 'react'
import styles from '../../styles/modules/Menu.module.css'

type Props = {
  onClick: React.MouseEventHandler<HTMLLIElement>;
  isActive: boolean;
}

const MenuItem: React.FC<Props> = (props) => {
  return (
    <li className={styles.menuItem + ' ' + (props.isActive ? styles.menuItemActive : '')} onClick={props.onClick}>
      { props.children }
    </li>
  )
}

export default MenuItem
