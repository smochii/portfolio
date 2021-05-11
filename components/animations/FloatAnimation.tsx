import React from 'react'

type Props = {
  duration: string;
  delay: string;
}

const FloatAnimation: React.FC<Props> = (props) => {
  const animation: React.CSSProperties = {
    animationName: 'float',
    animationDuration: props.duration,
    animationDelay: props.delay,
    animationIterationCount: 'infinite',
    animationDirection: 'alternate'
  }

  return (
    <div style={animation}>
      { props.children }
    </div>
  )
}

export default FloatAnimation
