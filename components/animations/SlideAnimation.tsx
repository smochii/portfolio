import React from 'react'
import styles from '../../styles/modules/Animation.module.css'

type Props = {
  duration: string;
  delay: string;
  color: string;
  remove?: boolean;
}

const SlideAnimation: React.FC<Props> = (props) => {
  const animation: React.CSSProperties = {
    animationName: 'slide',
    animationDuration: props.duration,
    animationDelay: props.delay,
    animationFillMode: 'forwards',
    backgroundColor: props.color,
  }

  const handleAnimationEnd: React.AnimationEventHandler<HTMLDivElement> = (event) => {
    if (!props.remove) {
      return;
    }
  }

  return (
    <div style={animation} className={styles.slide} onAnimationEnd={handleAnimationEnd}>
    </div>
  )
}

export default SlideAnimation
