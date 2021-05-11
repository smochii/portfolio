import React from 'react'
import styles from '../../styles/modules/Animation.module.css'

type Props = {
  duration: string;
  delay: string;
}

const FadeInAnimation: React.FC<Props> = (props) => {
  const animation: React.CSSProperties = {
    animationName: 'fadeIn',
    animationDuration: props.duration,
    animationDelay: props.delay,
    animationFillMode: 'forwards'
  }

  return (
    <div style={animation} className={styles.fadeIn}>
      { props.children }
    </div>
  )
}

export default FadeInAnimation
