import React from 'react'
import styles from '../../styles/modules/Profile.module.css'

type Props = {
  text: string;
  duration: string;
  delay?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SkillChip: React.FC<Props> = (props) => {
  const style: React.CSSProperties = {
    animationName: 'borderDeformation',
    animationDuration: props.duration,
    animationDelay: props.delay ? props.delay : '0s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    borderColor: props.color ? props.color : 'none',
    color: props.color ? props.color : 'white',
  }

  return (
    <div style={style} className={styles.chip} onClick={props.onClick}>
      {props.text}
    </div>
  )
}

export default SkillChip
