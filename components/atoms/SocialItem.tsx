import React, { useState } from 'react'
import styles from '../../styles/modules/Home.module.css'

type Props = {
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const SocialItem: React.FC<Props> = (props) => {
  return (
    <li className={styles.socialItem} onClick={props.onClick}>
      { props.children }
    </li>
  )
}

export default SocialItem
