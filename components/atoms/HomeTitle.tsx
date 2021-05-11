import React from 'react'
import styles from '../../styles/modules/Home.module.css'
import BounceTextAnimation from '../animations/BounceTextAnimation'
import FadeInAnimation from '../animations/FadeInAnimation'

type Props = {
  title: string
}

const HomeTitle: React.FC<Props> = (props) => {
  return (
    <FadeInAnimation duration='1s' delay='1s'>
      <h1 className={styles.title}>
        <BounceTextAnimation text={props.title}/>
      </h1>
    </FadeInAnimation>
  )
}

export default HomeTitle
