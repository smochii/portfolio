import React from 'react'
import styles from '../../styles/modules/Animation.module.css'

type Props = {
  text: string;
}

const BounceTextAnimation: React.FC<Props> = (props) => {
  const textArray = Array.from(props.text);

  const textElements: JSX.Element[] = textArray.map((char, i) => {
    const animation: React.CSSProperties = {
      animationName: 'bounce',
      animationDuration: '2s',
      animationDelay: `.${i}s`,
      animationIterationCount: 'infinite',
      animationDirection: 'alternate'
    }
    
    return (
      <span key={i} style={animation} className={styles.bounce}>
        { char }
      </span>
    )
  });

  return (
    <React.Fragment>
      { textElements }
    </React.Fragment>
  )
}

export default BounceTextAnimation
