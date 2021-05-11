import React from 'react'
import styles from '../../styles/modules/SkillsetModal.module.css'

type Props = {
  text: string;
  color: string;
}

const ChildSkillChip: React.FC<Props> = (props) => {
  const color: React.CSSProperties = {
    color: props.color
  }

  return (
    <div style={color} className={styles.chip}>
      {props.text}
    </div>
  )
}

export default ChildSkillChip
